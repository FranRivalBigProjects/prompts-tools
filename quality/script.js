const res=document.getElementById('res');function run(){
let score=Math.min(100, Math.floor(p.value.length/10));
let hasSteps=/step|steps|1\.|2\./i.test(p.value);
res.innerText=`Score: ${score}\nStructure: ${hasSteps?'Good':'Add steps'}`;
}