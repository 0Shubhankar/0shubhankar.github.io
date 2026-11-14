import {test} from 'node:test';import assert from 'node:assert/strict';import {tree,paths,stageEnds} from '../story.js';import {descriptions,chapterIndex,briefing} from '../../narrative.js';import {initial,choose} from '../engine.js';
test('every original choice has a concrete description',()=>{for(const choices of Object.values(tree))for(const [id] of choices)assert.ok(descriptions[id],id);});
test('every route has three reviews at two-year intervals',()=>{for(const path of paths()){let s=initial(),years=[];for(const id of path){s=choose(s,id);if(stageEnds[id])years.push(s.year);}assert.deepEqual(years,[2,4,6]);}});
test('chapter entry and labels are defined',()=>{for(const [i,n] of ['start','s','equity'].entries()){assert.equal(chapterIndex(n),i);assert.ok(briefing[n]);}});
