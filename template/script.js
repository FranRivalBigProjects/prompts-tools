const res=document.getElementById('res');function run(){
let r=role.value||'assistant', t=task.value||'task', c=constraints.value||'be concise';
res.innerText=`Role: ${r}\nTask: ${t}\nConstraints: ${c}\nOutput: structured with bullets and examples.`;
}