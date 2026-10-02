import test from 'node:test';
import assert from 'node:assert/strict';
import {searchPlaces} from '../site/menu-search.js';
test('menu search matches accents, punctuation, alternate names and streets across words',()=>{
 const items=[{name:'Café Loos',aliases:['Station Hofplein'],address:'Hofplein 1'},{name:'De Beurs',place:'Coolsingel',sources:[{title:'Café Loos'}]}];
 assert.deepEqual(searchPlaces(items,'cafe loos'),[items[0]]);
 assert.deepEqual(searchPlaces(items,'station hofplein'),[items[0]]);
 assert.deepEqual(searchPlaces(items,'beurs coolsingel'),[items[1]]);
 assert.deepEqual(searchPlaces(items,'onbekend'),[]);
});
