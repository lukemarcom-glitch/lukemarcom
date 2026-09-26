import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../site/vendor/three.module.js';
import {layoutMarkers} from '../site/marker-layout.js';
const classes=()=>{const set=new Set();return {contains:v=>set.has(v),toggle:(v,on)=>on?set.add(v):set.delete(v)}};
function marker(id,x=0){const name={offsetWidth:110,offsetHeight:34,textContent:id,style:{}};return {meta:{id,center:[x,0],height:20},el:{style:{},classList:classes(),querySelector:()=>name,matches:()=>false}};}
function setup(){
 const rect={left:0,top:0,right:1000,bottom:800};globalThis.document={fonts:{status:'loaded'},activeElement:null,body:{classList:classes()},getElementById:()=>({getBoundingClientRect:()=>rect}),querySelectorAll:()=>[]};
 const camera=new THREE.PerspectiveCamera(38,1000/800,8,14000),target=new THREE.Vector3();camera.position.set(250,600,750);camera.lookAt(target);camera.updateMatrixWorld();return {camera,controls:{target}};
}
const position=el=>el.style.transform.match(/translate3d\(([-\d.]+)px,([-\d.]+)px/).slice(1).map(Number);
test('anchors track every camera frame, including frames less than 70ms apart',()=>{
 const {camera,controls}=setup(),m=marker('Plan C');layoutMarkers([m],camera,controls,'old',1000,800,true,THREE);const before=position(m.el);
 camera.position.x+=15;camera.lookAt(controls.target);camera.updateMatrixWorld();layoutMarkers([m],camera,controls,'old',1000,800,true,THREE);
 const after=position(m.el),p=new THREE.Vector3(0,25,0).project(camera);assert.notDeepEqual(after,before);assert.ok(Math.abs(after[0]+22-(p.x+1)*500)<1e-8);assert.ok(Math.abs(after[1]+22-(1-p.y)*400)<1e-8);
});
test('street-name additions cannot contaminate the next frame collision budget',()=>{
 const {camera,controls}=setup(),m=marker('Willemsbrug');const first=layoutMarkers([m],camera,controls,'old',1000,800,true,THREE);first.push({l:-10000,r:10000,t:-10000,b:10000});
 const second=layoutMarkers([m],camera,controls,'old',1000,800,true,THREE);assert.notEqual(first,second);assert.ok(m.el.classList.contains('has-name'));assert.equal(second.length,2);
});
test('collisions keep selected places and hiding labels hides both dot and name',()=>{
 const {camera,controls}=setup(),a=marker('A'),b=marker('B');b.el.classList.toggle('selected',true);document.body.classList.toggle('landmark-open',true);
 layoutMarkers([a,b],camera,controls,'old',1000,800,true,THREE);assert.equal(a.el.style.visibility,'hidden');assert.equal(b.el.style.visibility,'visible');
 layoutMarkers([a,b],camera,controls,'old',1000,800,false,THREE);for(const m of [a,b]){assert.equal(m.el.style.visibility,'hidden');assert.equal(m.el.classList.contains('has-name'),false);}
});
