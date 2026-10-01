(function(root){
'use strict';
const fixtures={
 focus:{name:'FocusFlow',category:'Fictional planning app',audience:'Independent professionals with scattered tasks',goal:'Create a plan and complete one task',source:{id:'brief-focus-v1',label:'Synthetic product brief',facts:['Users can create a daily plan.','Users can mark tasks complete.','Users can move unfinished tasks to a later date.']},steps:[
 {day:'Day 0',trigger:'Signed up, no plan created',subject:'Give today a little direction',body:'Start with one task that matters today. Add it to your daily plan and take the next small step.',cta:'Create my plan',event:'plan_created',sourceIds:['brief-focus-v1']},
 {day:'Day 1',trigger:'Plan created, no task completed',subject:'One task is a useful start',body:'Your plan is ready. Choose one task you can finish today. You can move the rest to a later date.',cta:'Open my plan',event:'task_completed',sourceIds:['brief-focus-v1']},
 {day:'Day 3',trigger:'Prior task completed, no activity for two days',subject:'Make room for a fresh start',body:'A busy day does not need to derail your plan. Move unfinished tasks to a date that fits and choose your next step.',cta:'Review my plan',event:'task_completed',sourceIds:['brief-focus-v1']}
 ]},
 learn:{name:'SkillSpring',category:'Fictional learning app',audience:'Busy adults learning a new professional skill',goal:'Complete a lesson and save the next one',source:{id:'brief-learn-v1',label:'Synthetic product brief',facts:['Users can choose a learning track.','Users can complete short lessons.','Users can save a lesson for later.']},steps:[
 {day:'Day 0',trigger:'Signed up, no track chosen',subject:'Start with something you want to learn',body:'Choose a learning track that fits your interests. Your first short lesson is a place to begin.',cta:'Choose my track',event:'track_selected',sourceIds:['brief-learn-v1']},
 {day:'Day 1',trigger:'Track chosen, no lesson completed',subject:'Take your first learning step',body:'Open your track and try a short lesson. Start with the topic that feels useful today.',cta:'Open my lesson',event:'lesson_completed',sourceIds:['brief-learn-v1']},
 {day:'Day 3',trigger:'Lesson completed, no next lesson saved',subject:'Give your next lesson a place',body:'Keep the learning going at your own pace. Save the next lesson so it is easy to find when you return.',cta:'Save my next lesson',event:'lesson_saved',sourceIds:['brief-learn-v1']}
 ]}
};
function build(key,variant='clean'){
 if(!fixtures[key])throw new Error('Unknown sample');
 const f=JSON.parse(JSON.stringify(fixtures[key]));
 const out={schemaVersion:'1.0',mode:'deterministic-sample',product:f.name,audience:f.audience,goal:f.goal,sources:[f.source],emails:f.steps,consentRequired:true,suppressions:['goal_completed','unsubscribed','account_closed'],approval:'pending',modelCalls:0};
 if(variant==='claims')out.emails[0].body+=' Guaranteed to double your productivity by 200%.';
 if(variant==='source')out.emails[1].sourceIds=['missing-source'];
 if(variant==='consent')out.consentRequired=false;
 return out;
}
function review(c){
 const issues=[];const known=new Set((c.sources||[]).map(s=>s.id));
 if(c.mode!=='deterministic-sample')issues.push({severity:'block',code:'MODE',message:'Sample mode label is missing.'});
 if(!Array.isArray(c.emails)||c.emails.length!==3)issues.push({severity:'block',code:'SCHEMA',message:'Expected three email objects.'});
 for(const [i,e] of (c.emails||[]).entries()){
 const label=`Email ${i+1}`;
 for(const field of ['subject','body','cta','trigger','event'])if(typeof e[field]!=='string'||!e[field].trim())issues.push({severity:'block',code:'SCHEMA',message:`${label}: missing ${field}.`});
 if(!Array.isArray(e.sourceIds)||!e.sourceIds.length||e.sourceIds.some(id=>!known.has(id)))issues.push({severity:'block',code:'SOURCE',message:`${label}: missing or unknown source reference.`});
 if(/guarantee|\d+\s*%|double your/i.test((e.subject||'')+' '+(e.body||'')))issues.push({severity:'block',code:'CLAIM',message:`${label}: potentially unsupported performance claim. Review against source evidence.`});
 if((e.subject||'').length>65)issues.push({severity:'review',code:'LENGTH',message:`${label}: subject exceeds the demo's 65-character guideline.`});
 }
 if(c.consentRequired!==true)issues.push({severity:'block',code:'CONSENT',message:'Marketing eligibility must be checked before sending.'});
 for(const rule of ['goal_completed','unsubscribed','account_closed'])if(!(c.suppressions||[]).includes(rule))issues.push({severity:'block',code:'SUPPRESSION',message:`Missing suppression rule: ${rule}.`});
 return {issues,blocked:issues.some(i=>i.severity==='block'),checks:['Required fields','Source references','Claim patterns','Consent flag','Suppression rules','Subject length'],limitation:'Rules detect selected patterns and missing fields. They do not verify every factual claim or predict campaign performance.'};
}
function approve(c,confirmed){const r=review(c);if(r.blocked||!confirmed)throw new Error('Resolve blocking issues and confirm human review first.');return {...c,approval:'human-reviewed-demo'};}
function brief(c){return `# ${c.product}: activation campaign\n\nMode: deterministic sample. No live AI calls or deployed results.\n\nAudience: ${c.audience}\nGoal: ${c.goal}\n\n`+c.emails.map(e=>`## ${e.day}: ${e.subject}\n\nTrigger: ${e.trigger}\n\n${e.body}\n\nCTA: ${e.cta}\nOutcome event: ${e.event}\nSource: ${e.sourceIds.join(', ')}\n`).join('\n')+`\n## Review\n\nApproval: ${c.approval}\nConsent required: ${c.consentRequired}\nSuppressions: ${c.suppressions.join(', ')}\n\n## Proposed experiment\n\nRandomize eligible users to the sequence or the current journey. Define a baseline and sample size before launch. Measure goal completion within seven days of assignment with opt-outs and complaints as guardrails. No lift is assumed.\n`;}
const api={fixtures,build,review,approve,brief};if(typeof module!=='undefined')module.exports=api;else root.Studio=api;
})(typeof window==='undefined'?globalThis:window);
