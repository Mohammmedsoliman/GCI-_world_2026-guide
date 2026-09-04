const accessTime=localStorage.getItem('gci_developer_access');
const SIX_HOURS=12*60*60*1000;

if(!accessTime||Date.now()-Number(accessTime)>=SIX_HOURS){
localStorage.removeItem('gci_developer_access');
window.location.replace('../../index.html');
}

document.addEventListener('contextmenu',e=>e.preventDefault());

document.addEventListener('copy',e=>e.preventDefault());

document.addEventListener('keydown',e=>{
const key=e.key.toLowerCase();

if(
key==='f12'||
(e.ctrlKey&&e.shiftKey&&['i','j','c'].includes(key))||
(e.ctrlKey&&['u','s'].includes(key))||
(e.metaKey&&e.altKey&&['i','j','c'].includes(key))||
(e.metaKey&&key==='u')
){
e.preventDefault();
e.stopPropagation();
return false;
}
});