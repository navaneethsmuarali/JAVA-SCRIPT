const inc =document.getElementById("inc");
const dec =document.getElementById("dec");
const res =document.getElementById("res");
const lab =document.getElementById("count")
let count=0;

inc.onclick=function(){
    count++;
    lab.textContent=count;
}

dec.onclick=function(){
    count--;
    lab.textContent=count;
}
res.onclick=function(){
    count=0;
    lab.textContent=count;
}