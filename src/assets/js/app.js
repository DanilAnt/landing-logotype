"use strict"

const body = document.getElementById("body");
const burger = document.getElementById("burger");
const menu = document.querySelectorAll("[data-scroll]");
const header = document.getElementById("header")
document.addEventListener("click", (e)=> {
    
    if(e.target == burger){
        body.classList.toggle("showMenu")
    }else{
        body.classList.remove("showMenu") 
    }
     
});
console.log(menu);
menu.forEach((item)=>{
    item.addEventListener("click", (e)=>{
       const id = item.attributes.getNamedItem("data-scroll").value;
       const target = document.getElementById(id);
       const height = target.offsetTop;
       const headerHeight = header.offsetHeight;
       const pos = window.pageYOffset;
       scrollTo(pos, height-headerHeight, 300, 100)
    })
})
function scrollTo(from, to, time, steps){
    const interval = time/steps;
    let i = 1; 
    let timerId = setInterval(()=>{window.scrollTo(0 ,from+(to-from)/steps*i); if(i>=steps){clearInterval(timerId)}; i++;}, interval);
}