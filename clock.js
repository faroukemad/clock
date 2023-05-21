setInterval( function displayTime(){

var date = new Date();
var h= date.getHours();
var m= date.getMinutes();
var s= date.getSeconds();
var ss;
if(h>12)
 ss="PM";
else
ss="AM"; 

var time = h +":"+ m +":"+ s +" ";
document.getElementById("clockDis1").innerHTML=h+":";
document.getElementById("clockDis2").innerHTML=m+":";
document.getElementById("clockDis3").innerHTML=s+" "+ss;
},100);


