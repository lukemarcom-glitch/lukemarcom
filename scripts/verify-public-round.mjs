// Run after a successful Pages deployment, from the repository root.
// This verifies bytes only; source review and visual browser QA remain separate.
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
const [idsArg, output] = process.argv.slice(2);
if (!idsArg || !output) {
  console.log('Usage: RELEASE=<full SHA> PAGES_RUN=<successful run ID> node scripts/verify-public-round.mjs id1,id2,id3,id4,id5 docs/report.json');
  process.exit(idsArg === '--help' ? 0 : 1);
}
const ids = idsArg.split(',');
assert.equal(new Set(ids).size, 5, 'A round must contain five distinct locations');
assert.equal(ids.length, 5);
assert.match(process.env.RELEASE || '', /^[a-f0-9]{40}$/);
assert.match(process.env.PAGES_RUN || '', /^\d+$/);
assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim(), process.env.RELEASE, 'Local HEAD must match release');
assert.equal(execFileSync('git', ['status', '--porcelain', '--', 'site'], {encoding:'utf8'}).trim(), '', 'Commit runtime changes before comparison');
const catalog = JSON.parse(await fs.readFile('site/landmarks/catalog.json','utf8'));
const paths = new Set(['index.html','app.js','landmarks/catalog.json','data/model-landmarks.json']);
for (const id of ids) {
  const item = catalog.find(x => x.id === id);
  assert(item, `Missing location ${id}`);
  assert(item.photos?.length, `No photo pair for ${id}`);
  paths.add(`landmarks/${id}/model.glb`);
  for (const photo of item.photos) {
    assert(photo.src && photo.ai, `Incomplete pair for ${id}`);
    paths.add(photo.src); paths.add(photo.ai);
  }
}
const files = [];
for (const path of paths) {
  const local = await fs.readFile(`site/${path}`);
  const response = await fetch(`https://rdam39.nl/${path}?verify=${process.env.RELEASE}`, {signal:AbortSignal.timeout(30000)});
  assert.equal(response.status, 200, path);
  const remote = Buffer.from(await response.arrayBuffer());
  assert(local.equals(remote), `Public bytes differ: ${path}`);
  files.push({path, sha256:crypto.createHash('sha256').update(remote).digest('hex'), identical:true});
}
const report = {checkedAt:new Date().toISOString(),releaseCommit:process.env.RELEASE,pagesRun:process.env.PAGES_RUN,buildings:catalog.length,ids,files,scope:'Byte comparison only; deployment success and visual browser checks verified separately.'};
await fs.writeFile(output, JSON.stringify(report,null,2)+'\n');
console.log({verified:files.length,output});
