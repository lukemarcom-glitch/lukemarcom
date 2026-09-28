import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {photoCredit,sourceList,wikiBackground} from '../site/sources.js';
const entries=['landmarks','stories'].flatMap(kind=>JSON.parse(fs.readFileSync(new URL(`../site/${kind}/catalog.json`,import.meta.url))));
test('Every place has traceable photo credits and scoped text sources',()=>{
 for(const item of entries){
  assert.ok(item.sources?.length,item.id);
  for(const s of item.sources){assert.ok(s.supports?.trim(),`${item.id}: describe which information this source supports`);assert.match(s.url,/^https:\/\//);if(s.unavailable)assert.ok(s.accessNote);}
  for(const p of item.photos){assert.match(p.url,/^https:\/\//);assert.ok(p.author);assert.ok(p.license);assert.ok(photoCredit(p).includes('Herkomst van deze foto'));if(p.ai)assert.ok(photoCredit(p,true).includes('Bron van het oorspronkelijke beeld'));}
 }
});
test('AI credit preserves original source, author, rights and uncertainty',()=>{
 const p={url:'https://commons.wikimedia.org/wiki/File:Example.jpg',archiveUrl:'https://example.org/record/123',author:'Maker & maker',date:'circa 1930',identifier:'AB-123',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',aiLicense:'CC BY-SA 4.0',rightsNote:'Toeschrijving onzeker'};
 const html=photoCredit(p,true);
 for(const value of [p.url,p.archiveUrl,'Maker &amp; maker','AB-123',p.licenseUrl,'AI-bewerking door RDAM39','Toeschrijving onzeker'])assert.ok(html.includes(value));
 assert.ok(!photoCredit({url:p.url}).includes('undefined'));
});
test('Unavailable references retain citation but are not presented as working links',()=>{
 const html=sourceList({sources:[{url:'https://example.org/old.pdf',title:'Artikel, 1934, p. 12',supports:'Bouwgeschiedenis',unavailable:true,accessNote:'Reader niet bereikbaar',accessUrl:'https://example.org/status'}]});
 assert.ok(html.includes('Artikel, 1934, p. 12'));assert.ok(html.includes('https://example.org/old.pdf'));assert.ok(!html.includes('href="https://example.org/old.pdf"'));assert.ok(html.includes('href="https://example.org/status"'));
 assert.equal(wikiBackground({}),'');
});
