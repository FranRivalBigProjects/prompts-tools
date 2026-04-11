const res=document.getElementById('res');function run(){
let t=topic.value||'topic', tone=tone.value||'neutral', g=goal.value||'goal';
res.innerText=`Act as an expert. Create content about ${t} with a ${tone} tone. Objective: ${g}. Provide clear steps and examples.`;
}