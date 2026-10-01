'use strict';
const $=id=>document.getElementById(id);let campaign;
function el(tag,text,cls){const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e;}
function render(){
 campaign=Studio.build($('sample').value,$('variant').value);const audit=Studio.review(campaign);
 $('confirm').checked=false;$('approval').textContent='Pending human review. Downloads are drafts. Approval never sends an email.';
 $('product').textContent=campaign.product;$('audience').textContent=campaign.audience;
 $('facts').replaceChildren(...campaign.sources[0].facts.map(x=>el('li',x)));
 $('status').textContent=audit.blocked?'Needs revision':'Ready for human review';$('status').className='badge '+(audit.blocked?'bad':'good');
 $('issue-count').textContent=audit.issues.filter(i=>i.severity==='block').length;
 $('approve').disabled=audit.blocked;
 $('sequence').replaceChildren(...campaign.emails.map(e=>{const card=el('article',null,'email');card.append(el('span',e.day+' / '+e.event,'eyebrow'),el('p',e.trigger,'trigger'),el('h3',e.subject),el('p',e.body),el('span',e.cta,'mock-cta'),el('small','Source: '+e.sourceIds.join(', ')));return card;}));
 const qa=$('review');qa.replaceChildren(el('h3','Six checks. Explicit limits.'),el('p',audit.limitation));
 qa.append(el('p',audit.checks.join(' · '),'small'));
 if(!audit.issues.length)qa.append(el('div','No rule violations detected. This is not a factual-accuracy guarantee or a performance prediction.','check'));
 for(const i of audit.issues)qa.append(el('div',`${i.severity.toUpperCase()} / ${i.code}: ${i.message}`,'check failure'));
 const trace=$('trace');trace.replaceChildren();
 [['01 · Read brief','Load one versioned synthetic fixture. No retrieval or web research occurs.'],['02 · Assemble sequence','Select authored copy using the product key. This is deterministic assembly, not inference.'],['03 · Evaluate','Execute schema, reference, claim-pattern and consent/suppression checks in JavaScript.'],['04 · Review & export','A reviewer can approve passing drafts. Export JSON or Markdown locally. No sending integration exists.']].forEach(([h,p])=>{const c=el('article',null,'trace-card');c.append(el('h3',h),el('p',p));trace.append(c);});
}
function download(content,name,type){const a=document.createElement('a');const u=URL.createObjectURL(new Blob([content],{type}));a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
$('run').addEventListener('click',render);
// Changes rerun immediately so the visible product and exports can never be stale.
$('sample').addEventListener('change',render);$('variant').addEventListener('change',render);
$('approve').addEventListener('click',()=>{try{campaign=Studio.approve(campaign,$('confirm').checked);$('approval').textContent='Human-reviewed demo. No email was sent.';}catch(e){$('approval').textContent=e.message;}});
$('confirm').addEventListener('change',()=>{if(!$('confirm').checked){campaign.approval='pending';$('approval').textContent='Approval reset. Downloads are drafts.';}});
$('json').addEventListener('click',()=>download(JSON.stringify({...campaign,review:Studio.review(campaign)},null,2),'campaign-draft.json','application/json'));
$('markdown').addEventListener('click',()=>download(Studio.brief(campaign),'campaign-brief.md','text/markdown'));
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-tab]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));['sequence','review','trace'].forEach(id=>$(id).hidden=id!==b.dataset.tab);}));render();
