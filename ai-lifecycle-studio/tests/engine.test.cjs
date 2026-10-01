const test=require('node:test');const assert=require('node:assert/strict');const S=require('../engine.js');
for(const key of Object.keys(S.fixtures)){
 test(key+': clean campaign passes checks and remains unapproved',()=>{const c=S.build(key);assert.equal(S.review(c).blocked,false);assert.equal(c.approval,'pending');assert.equal(c.modelCalls,0);});
 for(const [variant,code] of [['claims','CLAIM'],['source','SOURCE'],['consent','CONSENT']])test(key+': '+variant+' blocks approval',()=>{const c=S.build(key,variant);assert(S.review(c).issues.some(i=>i.code===code));assert.throws(()=>S.approve(c,true));});
}
test('approval needs explicit human review',()=>{assert.throws(()=>S.approve(S.build('focus'),false));assert.equal(S.approve(S.build('focus'),true).approval,'human-reviewed-demo');});
test('missing CTA and suppression fail validation',()=>{const c=S.build('focus');delete c.emails[0].cta;c.suppressions=[];const r=S.review(c);assert(r.blocked);assert(r.issues.some(i=>i.code==='SCHEMA'));assert.equal(r.issues.filter(i=>i.code==='SUPPRESSION').length,3);});
test('long subject is a review warning',()=>{const c=S.build('focus');c.emails[0].subject='a'.repeat(66);assert(S.review(c).issues.some(i=>i.code==='LENGTH'));});
test('sample runs do not contaminate source fixtures',()=>{S.build('focus','claims');assert(!S.build('focus').emails[0].body.includes('200%'));});
test('exports retain sample disclosure and approval status',()=>{const c=S.build('learn');const out=S.brief(c);assert.match(out,/No live AI calls/);assert.match(out,/pending/);assert.match(out,/lesson_saved/);});
test('unknown product rejected',()=>assert.throws(()=>S.build('unknown')));
