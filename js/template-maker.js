class TemplateMaker{
    constructor(caption="",src="",cost=0,starNumber=0,spacialOfferSituation=false){
        this.caption=caption;
        this.cost=cost;
        this.src=src;
        this.starNumber=starNumber;
        this.spacialOfferSituation=spacialOfferSituation;
    }
    padMaker(row,sectionCounter){
        let pad=document.createElement("DIV");
        pad.setAttribute("class","pad");
        if(document.documentElement.scrollWidth>967){
            pad.style.width="20%";
            pad.style.height="90%";
            pad.style.margin="10px 35px"
            pad.style.float="left";
        }else{
            pad.style.width="80%";
            pad.style.height="30rem";
            pad.style.margin="10px auto";
           
        }
        
        pad.style.backgroundColor="white";
        pad.style.boxShadow="0 0 10px 3px gray";
        pad.style.display="flex";
        pad.style.justifyContent="center";
        pad.style.alignItems="center";
        /*********************************/
        let div=document.createElement("DIV");
        div.style.width="90%";
        div.style.height="95%";
        div.style.display="flex";
        div.style.flexDirection="column";
        div.style.justifyContent="center";
        div.style.alignItems="center";
        div.style.position="relative";
        /*********************************/
        let fig=document.createElement("FIGURE");
        fig.style.width="100%";
        fig.style.height="65%";
        fig.style.backgroundColor="aqua";
        div.appendChild(fig);
        /**********************************/
        let img=document.createElement("IMG");
        img.style.width="100%";
        img.style.height="100%";
        img.setAttribute("alt","production-pic");
        img.setAttribute("src",`${this.src}`);                                     /*----------this.src---------*/
        fig.appendChild(img);
        /***********************************/
        let figCap=document.createElement("FIGCAPTION");
        figCap.textContent=`${this.caption}`;
        figCap.style.display="flex";
        figCap.style.flexWrap="nowrap";
        figCap.style.justifyContent="center";
        figCap.style.alignItems="center";
        figCap.style.width="100%";
        figCap.style.height="10%";
        figCap.style.fontFamily="sans-serif";
        div.appendChild(figCap);
        /*************************************/
        let containerDiv=document.createElement("DIV");
        containerDiv.style.width="100%";
        containerDiv.style.height="25%";
        let innerDiv=document.createElement("DIV");
        let price=document.createElement("P");
        price.innerText=`${this.cost} USD`;                               /*------------------price------------------------*/
        price.style.position="absolute";
        price.style.bottom="0";
        price.style.right="0";
        price.style.fontSize="120%";
        containerDiv.appendChild(price);
        /***********************/
        let likePurchase=document.createElement("DIV");
        likePurchase.style.height="20%";
        likePurchase.style.position="absolute";
        likePurchase.style.bottom="0";
        likePurchase.style.left="0";
        likePurchase.style.display="flex";
        likePurchase.style.justifyContent="flex-start";
        likePurchase.style.alignItems="center";
        likePurchase.style.width="55%";
        /***********************************/
        let purchase=document.createElement("DIV");
        let x=document.createAttribute("class");
        x.value="purchase";
        purchase.setAttributeNode(x);
        purchase.style.transition="all .3s";
        purchase.style.width="auto";
        purchase.style.minWidth="2.5rem";
        purchase.style.height="70%";
        purchase.style.borderRadius="50px";
        purchase.style.backgroundColor="green";
        purchase.style.display="flex";
        purchase.style.justifyContent="space-around";
        purchase.style.alignItems="center";
        let purchaseIcon=document.createElement("IMG");
        purchaseIcon.setAttribute("src","./Assets/icons/main/icons8-buy-48.png");
        purchaseIcon.style.width="1.5rem";
        purchaseIcon.style.height="auto";
        purchase.appendChild(purchaseIcon);
        let purchaseTxt=document.createElement("P");
        purchaseTxt.textContent="Purchase";
        purchaseTxt.style.color="white";
        purchaseTxt.style.display="none";
        purchase.style.marginRight="1px";
        purchase.appendChild(purchaseTxt);
        likePurchase.appendChild(purchase);
        /***********************************/
        let favorite=document.createElement("DIV");
        favorite.setAttribute("class","favorite");
        favorite.style.width="auto";
        favorite.style.minWidth="2.5rem";
        favorite.style.height="70%";
        favorite.style.borderRadius="50px";
        favorite.style.transition="all .3s";
        favorite.style.backgroundColor="green";
        favorite.style.display="flex";
        favorite.style.justifyContent="space-around";
        favorite.style.alignItems="center";
        let heartIcon=document.createElement("IMG");
        heartIcon.setAttribute("src","./Assets/icons/main/icons8-heart-48.png");
        heartIcon.style.width="1.5rem";
        heartIcon.style.height="auto";
        favorite.appendChild(heartIcon);
        let favoriteTxt=document.createElement("P");
        favoriteTxt.textContent="Favorite";
        favoriteTxt.style.color="white";
        favoriteTxt.style.display="none";
        favorite.appendChild(favoriteTxt);
        likePurchase.appendChild(favorite);
        containerDiv.appendChild(likePurchase);
        /*************************************star rank*/
        let starBox=document.createElement("DIV");
        starBox.style.width="7rem";
        starBox.style.height="2rem";
        starBox.style.position="absolute";
        starBox.style.top="0";
        starBox.style.left="0";
        starBox.style.display="flex";
        starBox.style.justifyContent="flex-start";
        starBox.style.alignItems="center";
        starBox.style.zIndex="5";
        for(let i=0;i<=this.starNumber;i++){                        /*---------------------------------this.starNumber-----------------*/
            let star=document.createElement("IMG");
            star.setAttribute("src","./Assets/icons/main/icons8-star-filled-96.png");
            star.style.width="1.5rem";
            star.style.height="90%";
            starBox.appendChild(star);
        }
        div.appendChild(starBox);
        /*************************************spacial offer*/
        let spacialOffer=document.createElement("DIV");
        spacialOffer.innerText="Spacial offer";
        spacialOffer.style.color="white";
        spacialOffer.style.display="flex";
        spacialOffer.style.justifyContent="center";
        spacialOffer.style.alignItems="center";
        spacialOffer.style.fontWeight="bold";
        spacialOffer.style.fontSize="80%";
        spacialOffer.style.width="5rem";
        spacialOffer.style.height="2rem";
        spacialOffer.style.boxShadow="0 0 5px 1px white inset"
        spacialOffer.style.position="absolute";
        spacialOffer.style.top="0";
        spacialOffer.style.right="0";
        spacialOffer.style.zIndex="5";
        spacialOffer.style.margin="1px 1px";
        spacialOffer.style.border="1px solid white";
        spacialOffer.style.borderRadius="10px";
        spacialOffer.style.backgroundColor=" rgb(252, 86, 86)";
        if (this.spacialOfferSituation) {
            div.appendChild(spacialOffer);              /*--------------------------------spacial offer boolean--*/ 
        }
        /**************************************/
        div.appendChild(containerDiv);
        /**************************************/
        pad.appendChild(div);
        if (row==="hs") {
            document.querySelector(".headset").appendChild(pad);
        }else{
            if (document.documentElement.scrollWidth>967) {
                document.querySelector(".inner-handsfree").lastElementChild.appendChild(pad);
            }else{
                document.querySelector(".handsfree").appendChild(pad);
            }
            
        }
        
    }
    sectionMaker(num){
        let div=document.createElement("DIV");
        div.setAttribute("class",`part p${num}`);
        // div.style.backgroundColor=`rgb(${Math.round(Math.random()*100)},${Math.round(Math.random()*100)},${Math.round(Math.random()*100)})`
        div.style.width="100%";
        div.style.height="90%";
        div.style.display="flex";
        div.style.justifyContent="space-around";
        div.style.alignItems="center";
        div.style.margin="1px";
        div.style.display="none";
        let dot=this.dotGenerator(num);
        document.getElementsByClassName("dot-container")[0].appendChild(dot);
        document.querySelector(".inner-handsfree").appendChild(div);
    }
    dotGenerator(n){
        let div=document.createElement("DIV");
        div.setAttribute("class",`dot-${n} dot`);
        div.style.width="10px";
        div.style.height="10px";
        div.style.margin="0 10px";
        div.style.backgroundColor="gray";
        div.style.borderRadius="50%";
        return div;
    }
    dotHover(e){
        document.querySelectorAll(".dot").forEach(item=>{
            item.style.width="10px";
            item.style.height="10px";
        })
        e.target.style.width="15px";
        e.target.style.height="15px";
        // e.target.style.backgroundColor="rgb(44, 61, 92)";
    }
}
