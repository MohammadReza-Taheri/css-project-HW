let hsData=[
    {id:"HS-1",model:"Denon-a50TW",pic:"Assets/pictures/HS/denon-a50TW.jpg",price:60,rank:2,spacialOffer:true},
    {id:"HS-3",model:"Logitech-H540",pic:"Assets/pictures/HS/logitech-H540.jpg",price:45.5,rank:3,spacialOffer:false},
    {id:"HS-4",model:"Panasonic-ST200",pic:"Assets/pictures/HS/panasonic-ST200.jpg",price:58,rank:4,spacialOffer:false},
    {id:"HS-5",model:"Sony-GA-100",pic:"Assets/pictures/HS/sony-GA-100.jpg",price:102,rank:4,spacialOffer:true},
    
];
let hfData=[
    {id:"HS-1",model:"Denon-a50TW",pic:"Assets/pictures/HS/denon-a50TW.jpg",price:60,rank:2,spacialOffer:true},
    {id:"HS-2",model:"JBL-quantom",pic:"Assets/pictures/HS/jbl-quantom.jpg",price:33,rank:3,spacialOffer:false},
    {id:"HS-3",model:"Logitech-H540",pic:"Assets/pictures/HS/logitech-H540.jpg",price:45.5,rank:3,spacialOffer:false},
    {id:"HS-4",model:"Panasonic-ST200",pic:"Assets/pictures/HS/panasonic-ST200.jpg",price:58,rank:4,spacialOffer:false},
    {id:"HS-5",model:"Sony-GA-100",pic:"Assets/pictures/HS/sony-GA-100.jpg",price:102,rank:4,spacialOffer:true},
    {id:"HS-1",model:"Denon-a50TW-1",pic:"Assets/pictures/HS/denon-a50TW.jpg",price:60,rank:2,spacialOffer:true},
    {id:"HS-2",model:"JBL-quantom-1",pic:"Assets/pictures/HS/jbl-quantom.jpg",price:33,rank:3,spacialOffer:false},
    {id:"HS-3",model:"Logitech-H540-1",pic:"Assets/pictures/HS/logitech-H540.jpg",price:45.5,rank:3,spacialOffer:false},
    {id:"HS-4",model:"Panasonic-ST200-1",pic:"Assets/pictures/HS/panasonic-ST200.jpg",price:58,rank:4,spacialOffer:false},
    {id:"HS-5",model:"Sony-GA-100-1",pic:"Assets/pictures/HS/sony-GA-100.jpg",price:102,rank:4,spacialOffer:true}
];
let counter=0;


// "use strict"

// if (document.querySelector("#ch")) {
//     alert("search tag existed")
// }

if (document.querySelector(".fig")) {
    picAnimation(true)
}

    document.querySelector(".slider").addEventListener("click",(e)=>{
        if (e.target.classList.contains("left")) {
            sliderChanger(-1);
        }
        else if (e.target.classList.contains("right")) {
            sliderChanger(1);
        }
    }) 


hsData.forEach((item,index)=>{     /****************************************item request***/
    let tempMaker=new TemplateMaker(hsData[index].model,hsData[index].pic,hsData[index].price,hsData[index].rank,hsData[index].spacialOffer);
    tempMaker.padMaker("hs");
    
});
hfData.forEach((item,index)=>{
    let tempMaker=new TemplateMaker(hfData[index].model,hfData[index].pic,hfData[index].price,hfData[index].rank,hfData[index].spacialOffer);
    if (index>=(4*counter)) {      /***************************************section request***/
        tempMaker.sectionMaker(counter);
        counter++;    
    }
    tempMaker.padMaker("",counter);
    document.getElementsByClassName("p0")[0].style.display="block";      //***to make the first section appeared */
    
});

document.querySelector(".dot-container").addEventListener("click",(e)=>{  //***for click on DOTs to change the sections****/
    let part=Array.from(document.querySelectorAll(".part")).filter((item)=>window.getComputedStyle(item,null).getPropertyValue("display")==="block");

    part[0].style.display="none";
    document.querySelector(`.p${e.target.classList[0].slice(-1)}`).style.display="block";

    tempMaker.dotHover(e);
});
/******************************************************************************************purchase & favorite hover*********/
let tempMaker=new TemplateMaker();
document.querySelector(".headset").addEventListener("mouseover",(e)=>{
    if (e.target.className==="purchase") {
        e.target.style.width="6rem";
        e.target.style.cursor="pointer";
        e.target.lastElementChild.style.display="block";
        e.target.addEventListener("mouseleave",(e)=>{
            e.target.style.width="2.5rem";
            e.target.lastElementChild.style.display="none";
        });
    } 
    if (e.target.className==="favorite") {
        e.target.style.width="6rem";
        e.target.lastElementChild.style.display="block";
        e.target.style.cursor="pointer";
        e.target.addEventListener("mouseleave",(e)=>{
            e.target.style.width="2.5rem";
            e.target.lastElementChild.style.display="none";
        });
    } 
    

});
document.querySelector(".inner-handsfree").addEventListener("mouseover",(e)=>{
    if (e.target.className==="purchase") {
        e.target.style.width="6rem";
        e.target.style.cursor="pointer";
        e.target.lastElementChild.style.display="block";
        e.target.addEventListener("mouseleave",(e)=>{
            e.target.style.width="2.5rem";
            e.target.lastElementChild.style.display="none";
        });
    } 
    if (e.target.className==="favorite") {
        e.target.style.width="6rem";
        e.target.lastElementChild.style.display="block";
        e.target.style.cursor="pointer";
        e.target.addEventListener("mouseleave",(e)=>{
            e.target.style.width="2.5rem";
            e.target.lastElementChild.style.display="none";
        });
    } 
    

});