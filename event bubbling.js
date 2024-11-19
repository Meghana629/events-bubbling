const Gparent=document.getElementById("Grandparent")
Gparent.addEventListener("click",(e)=>{
    setTimeout(()=>{
    console.log("Grandparent is clicked")
    Gparent.style.backgroundColor="coral"
    },1000)
},true)
const parent=document.getElementById("parent")
parent.addEventListener("click",(e)=>{
    setTimeout(()=>{
    console.log("parent is clicked")
    parent.style.backgroundColor="lightblue"
    },1000)
},false)
const child=document.getElementById("child")
child.addEventListener("click",(e)=>{
    setTimeout(()=>{
    console.log("child is clicked")
    child.style.backgroundColor="lightgreen"
    },1000)
},false)