function calculate() {
   var area = Number(document.getElementById("hhh").value) * Number(document.getElementById("hhh").value) ; var perimeter = Number(document.getElementById("hhh").value) * 4
   document.getElementById("lblarea").innerHTML = area;                          
   document.getElementById("lblperimeter").innerHTML = perimeter;   
}

function calculati() {
    var area1 = Number(document.getElementById("hhh1").value) * Number(document.getElementById("hhh2").value) ; var perimeter1 = (Number(document.getElementById("hhh1").value) + Number(document.getElementById("hhh2").value) )* 2
   document.getElementById("lblarea2").innerHTML = area1;                          
   document.getElementById("lblperimeter2").innerHTML = perimeter1;   
}

function calculate2() {
   var area2 = Number((document.getElementById("hhh2").value) * Number(document.getElementById("hhh3").value))/2; 
   var perimeter2 = (Number(document.getElementById("hhh2").value)*2 + Number(document.getElementById("hhh3").value) );
   document.getElementById("lblarea3").innerHTML = area2;                          
   document.getElementById("lblperimeter3").innerHTML = perimeter2;   
}