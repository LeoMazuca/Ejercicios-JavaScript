const d = document;
let positionY = 0;
let positionX = 0;

export function keyEvent(e){
    e.preventDefault(); 
    if(!/[^a-z]/ig.test(e.key)){
        const limitBall = d.querySelector(".recuadro").getBoundingClientRect(),
        limitStage = d.querySelector(".container").getBoundingClientRect();
        if(e.key === "ArrowUp"){
            if((limitBall.top -10) > limitStage.top){
                e.preventDefault();
                positionY += -10;
                d.querySelector(".recuadro").style.transform = `translate(${positionX}px, ${positionY}px)`;
            } 
        }
        if(e.key === "ArrowDown"){
            if((limitBall.bottom +10) < limitStage.bottom){
                e.preventDefault();
                positionY += +10;
                d.querySelector(".recuadro").style.transform = `translate(${positionX}px, ${positionY}px)`;
            }
        }
        if(e.key === "ArrowLeft"){
            if((limitBall.left -10) > limitStage.left){
                e.preventDefault();
                positionX += -10;
                d.querySelector(".recuadro").style.transform = `translate(${positionX}px, ${positionY}px)`;
            }
        }
        if(e.key === "ArrowRight"){
            if((limitBall.right +10) < limitStage.right){
                 positionX += +10;
                e.preventDefault();
                d.querySelector(".recuadro").style.transform = `translate(${positionX}px, ${positionY}px)`;
            }
        }
        if (e.altKey) {
               if (e.key === "a" || e.key ==="A") {
                   alert("Precionaste la tecla Alt + A");
               }
            }

            d.querySelector(`.${e.key.toLowerCase()}`).style.filter= "brightness(1.5)";
            setTimeout(() => {
            d.querySelector(`.${e.key.toLowerCase()}`).style.filter= "brightness(1)";    
            }, 100);
    }else{
        if(e.keyCode === 32){
                d.querySelector(`.space`).style.filter= "brightness(1.5)";
                setTimeout(() => {
                d.querySelector(`.space`).style.filter= "brightness(1)";    
                }, 100);
        }else{
            console.log("uy no se puede", e.keyCode)
        }
    }
    
} 