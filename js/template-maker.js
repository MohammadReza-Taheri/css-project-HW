class TemplateMaker{
    constructor(starNumber,spacialOfferSituation){
        this.starNumber=starNumber;
        this.spacialOfferSituation=spacialOfferSituation;
    }
    padMaker(){
        let pad=document.createElement("DIV");
        pad.style.width="20%";
        pad.style.height="90%";
        // div.style.marginTop="5%";
        pad.style.backgroundColor="white";
        pad.style.boxShadow="0 0 10px 3px gray";
        pad.style.display="flex";
        // div.style.flexDirection="column";
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
        img.setAttribute("src","../Assets/pictures/ferrariHeadset/ferrari-headset2.jpg"); /*-------------------*/
        fig.appendChild(img);
        /***********************************/
        let figCap=document.createElement("FIGCAPTION");
        figCap.textContent="Figcaption content";
        figCap.style.display="flex";
        figCap.style.flexWrap="nowrap";
        figCap.style.justifyContent="center";
        figCap.style.alignItems="center";
        figCap.style.width="100%";
        figCap.style.height="10%";
        // figCap.style.backgroundColor="blue";
        figCap.style.fontFamily="sans-serif";
        // figCap.style.fontSize="110%";
        div.appendChild(figCap);
        /*************************************/
        let containerDiv=document.createElement("DIV");
        containerDiv.style.width="100%";
        containerDiv.style.height="25%";
        // containerDiv.style.backgroundColor="green";
        let innerDiv=document.createElement("DIV");
        let price=document.createElement("P");
        let x="0000";
        price.innerText=`${x} USD`;                               /*------------------------------------------*/
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

        // likePurchase.style.backgroundColor="pink";
        likePurchase.style.width="55%";
        /***********************************/
        let purchase=document.createElement("DIV");
        purchase.setAttribute("class","purchase");
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
        purchaseTxt.textContent="Favorite";
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
        for(let i=0;i<=2;i++){                        /*---------------------------------this.starNumber-----------------*/
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
        document.querySelector(".headset").appendChild(pad);
    }
}