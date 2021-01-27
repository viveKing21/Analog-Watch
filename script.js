let secondSel=document.querySelector("[data-seconds]");
let minuteSel=document.querySelector("[data-minutes]");
let hourSel=document.querySelector("[data-hours]");
window.onload=myTime();
function myTime(){
let date=new Date();
var sec=date.getSeconds();
var min=date.getMinutes();
var hour=date.getHours();
if(hour>=13)
{
hour=hour-12;
}
sec.onchange=startWork(secondSel,minuteSel,hourSel,sec,min,hour);
setTimeout(myTime,1000);
}


function startWork(elementSec,elementMin,elementhour,sec,min,hour)
{	
	elementSec.style.setProperty("--rotation",sec * 6 +"deg");
	elementMin.style.setProperty("--rotation",min * 6 +"deg");
	elementhour.style.setProperty("--rotation",hour * 30 + min/2 +"deg");
}
for(i=0; i<12; i++)
{
   document.getElementsByClassName('num')[i].style.transform="rotate("+i*30+"deg)";
   document.getElementById(i).style.transform="rotate("+i*-30+"deg)";
}