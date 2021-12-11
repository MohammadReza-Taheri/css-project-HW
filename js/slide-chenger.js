let pictureNumber=0
function picAnimation(contin) {
    if (contin) {
        setInterval(() => {
            sliderChanger(1);
        }, 5000);
    }
}
function sliderChanger(state) {
    if (state===1) {
        document.querySelector(".scene").style.background="url('./Assets/pictures/ferrariHeadset/ferrari-headset"+(pictureNumber.toString())+".jpg') no-repeat center center";
        document.querySelector(".scene").style.backgroundSize= "cover";
        document.querySelector(".scene").style.transition="all .5s";
        pictureNumber++;
        if (pictureNumber>3) {
            pictureNumber=0
        }
    }
    else if (state===(-1)) {
        document.querySelector(".scene").style.background="url('./Assets/pictures/ferrariHeadset/ferrari-headset"+(pictureNumber.toString())+".jpg') no-repeat center center";
        document.querySelector(".scene").style.backgroundSize= "cover";
        document.querySelector(".scene").style.transition="all .5s";
        pictureNumber--;
        if (pictureNumber<0) {
            pictureNumber=3
        }
    }
       
}
