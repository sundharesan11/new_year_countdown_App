const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("mins");
const seconds=document.getElementById("sec");
const today=document.getElementById("td");
const newyear="2023,01,01";
today.innerHTML= new Date();
function countdown()
{
    let currentdate=new Date();
    let newyeardate=new Date(newyear);
    const totalseconds =(newyeardate-currentdate)/1000;
    const day=Math.floor(totalseconds/3600/24);
    const hour=Math.floor(totalseconds/3600)%24;
    const minute=Math.floor(totalseconds/60)%60;
    const second=Math.floor(totalseconds)%60;


    days.innerHTML=day;
    hours.innerHTML=formatTime(hour);
    minutes.innerHTML=formatTime(minute);
    seconds.innerHTML=formatTime(second);
    
}
function formatTime(time)
{
    return time<10 ?`0${time}`:time;
}
countdown();
setInterval(countdown,1000)
