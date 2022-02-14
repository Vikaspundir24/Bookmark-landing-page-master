const tab1_btn = document.getElementById("tab1");
const tab2_btn = document.getElementById("tab2");
const tab3_btn = document.getElementById("tab3");

const hero1_btn = document.getElementById("hero1");
const hero2_btn = document.getElementById("hero2");
const hero3_btn = document.getElementById("hero3");


tab2_btn.addEventListener('click', () => {
    tab1_btn.style.borderBottom = "none"
    tab2_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    hero2_btn.style.display = "flex"
    hero1_btn.style.display = "none"
    tab3_btn.style.borderBottom = "none"
    hero3_btn.style.display = "none"
})
tab1_btn.addEventListener('click', () => {
    tab2_btn.style.borderBottom = "none"
    tab1_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    hero1_btn.style.display = "flex"
    hero2_btn.style.display = "none"
    tab3_btn.style.borderBottom = "none"
    hero3_btn.style.display = "none"
})
tab3_btn.addEventListener('click', () => {
    tab1_btn.style.borderBottom = "none"
    tab3_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    hero3_btn.style.display = "flex"
    hero2_btn.style.display = "none"
    tab2_btn.style.borderBottom = "none"
    hero1_btn.style.display = "none"
})



const ar1 = document.querySelector(".arrow1")
const ar2 = document.querySelector(".arrow2")
const ar3 = document.querySelector(".arrow3")
const ar4 = document.querySelector(".arrow4")




ar1.addEventListener('click', () => {
    
    if (document.querySelector(".down1").style.display === "none") {
        document.querySelector(".down1").style.display = "flex";
      /*   document.querySelector(".q1").style.color = " hsl(0, 94%, 66%)" */
        /* ar1.style.transform = "rotate(180deg)"; */
       
    } else {
        document.querySelector(".down1").style.display = "none";
     
    }
    
})
ar2.addEventListener('click', () => {
    if (document.querySelector(".down2").style.display === "none") {
        document.querySelector(".down2").style.display = "flex";
       
    } else {
        document.querySelector(".down2").style.display = "none";
     
    }
})
ar3.addEventListener('click', () => {
    if (document.querySelector(".down3").style.display === "none") {
        document.querySelector(".down3").style.display = "flex";
       
    } else {
        document.querySelector(".down3").style.display = "none";
     
    }
})
ar4.addEventListener('click', () => {
    if (document.querySelector(".down4").style.display === "none") {
        document.querySelector(".down4").style.display = "flex";
       
    } else {
        document.querySelector(".down4").style.display = "none";
     
    }
})



const tog = document.querySelector(".toggle");

tog.addEventListener('click' , () =>{
    document.querySelector(".hidden").style.display = "inline";
   
})

const cross = document.getElementById("close");

cross.addEventListener('click' , () =>{
    document.querySelector(".hidden").style.display = "none";
    
})