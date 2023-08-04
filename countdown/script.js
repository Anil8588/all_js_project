const startMin=1;
let secTime=startMin*10;

const countdown=document.getElementById('countdown');
const countdown2=document.getElementById('countdown2');
const span=document.querySelector('span')
const btn=document.getElementById('btn');
const stop=document.getElementById('stop')
const para=document.getElementById('para')

let timerId=null;

 timerId = setInterval(updateCountDown,1000);

function updateCountDown(){
    const seconds=Math.floor(secTime/60);
    
    let miniSecond=secTime % 60;
    countdown.innerHTML=`${seconds}:${miniSecond}`;
    secTime--;
    
    para.innerHTML='seconds left!'
    countdown2.innerHTML=`${seconds}:${miniSecond}`;
   

    if (secTime < 0) {
      clearInterval(timerId)
    }
    
}

btn.addEventListener('click',function(){
    stop.innerHTML="You stopped it."
    clearInterval(timerId)
    para.innerHTML="";
    countdown2.innerHTML="";
})