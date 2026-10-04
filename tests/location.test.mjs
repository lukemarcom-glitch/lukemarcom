import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {toLocal, distanceToArea, assessPosition} from '../site/location.js';
const square = [[[0,0],[100,0],[100,100],[0,100],[0,0]]];
const origin=[4.485,51.919];
const timestamp=1000000;
function fix(x,y,accuracy=10) { return {timestamp,coords:{longitude:origin[0]+x/(111320*Math.cos(origin[1]*Math.PI/180)),latitude:origin[1]+y/111320,accuracy}}; }
test('Buffer measures metres to polygon edges, including concave and disconnected regions',()=>{
 assert.equal(distanceToArea([50,50],square),0);
 assert.equal(distanceToArea([0,50],square),0);
 assert.equal(distanceToArea([600,50],square),500);
 assert.equal(distanceToArea([601,50],square),501);
 assert.ok(Math.abs(distanceToArea([400,500],square)-500)<1e-8);
 const concave=[[[0,0],[100,0],[100,20],[20,20],[20,100],[0,100]]];
 assert.equal(distanceToArea([80,80],concave),60);
 assert.equal(distanceToArea([1020,1020],[...square,[[1000,1000],[1100,1000],[1100,1100],[1000,1100]]]),0);
 assert.equal(distanceToArea([0,0],[]),Infinity);
});
test('Reject far, stale, impossible and imprecise readings without a camera destination',()=>{
 for(const p of [fix(601,50),fix(20000,0)]) assert.deepEqual(assessPosition(p,square,origin,timestamp),{status:'outside'});
 for(const p of [fix(50,50,101),fix(50,50,NaN),fix(50,50,-1),{...fix(50,50),timestamp:timestamp-31000},{...fix(50,50),timestamp:timestamp+10000},{timestamp,coords:{longitude:181,latitude:52,accuracy:1}}]) assert.deepEqual(assessPosition(p,square,origin,timestamp),{status:'inaccurate'});
 assert.equal(assessPosition(fix(591,50,10),square,origin,timestamp).status,'inaccurate');
 assert.equal(assessPosition(fix(580,50,10),square,origin,timestamp).status,'accepted');
 assert.equal(assessPosition(fix(50,50),square,origin,timestamp).status,'accepted');
});
test('Real scene coordinate origin and Rotterdam fixes align; Amsterdam is rejected',()=>{
 const m=JSON.parse(fs.readFileSync(new URL('../site/data/model-landmarks.json',import.meta.url)));
 assert.deepEqual(toLocal(...m.originLonLat,m.originLonLat),[0,0]);
 const p={timestamp,coords:{latitude:51.9202,longitude:4.4866,accuracy:15}};
 assert.equal(assessPosition(p,m.boundary,m.originLonLat,timestamp).status,'accepted');
 p.coords.latitude=52.3676;p.coords.longitude=4.9041;
 assert.equal(assessPosition(p,m.boundary,m.originLonLat,timestamp).status,'outside');
});

import {readHeading, smoothHeading} from '../site/location.js';
test('Compass uses earth reference, rejects invalid data, handles upright and flat phones',()=>{
 assert.equal(readHeading({alpha:20,beta:90,gamma:0,absolute:false}),null);
 assert.equal(readHeading({webkitCompassHeading:-1}),null);
 assert.equal(readHeading({webkitCompassHeading:90,webkitCompassAccuracy:80}),null);
 assert.equal(readHeading({webkitCompassHeading:350},90),80);
 assert.equal(readHeading({absolute:true,alpha:null,beta:90,gamma:0}),null);
 for(const angle of [0,90,180,270]) {
  for(const beta of [0,45,90]) assert.ok(Math.abs(readHeading({absolute:true,alpha:(360-angle)%360,beta,gamma:0})-angle)<1e-7);
 }
 assert.equal(readHeading({absolute:true,alpha:0,beta:0,gamma:0},90),270);
 assert.equal(smoothHeading(359,1,.5),0);
 assert.equal(smoothHeading(1,359,.5),0);
});
