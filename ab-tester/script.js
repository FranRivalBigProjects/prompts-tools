const res=document.getElementById('res');function run(){
let la=a.value.length, lb=b.value.length;
res.innerText= la>lb ? 'A is more detailed' : (lb>la ? 'B is more detailed' : 'Similar length');
}