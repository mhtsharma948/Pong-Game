"use strict";
class Puck {
    constructor(pu,pl1,pl2,pltype) {
        this.puck = pu;
        this.player1=pl1;
        this.player2=pl2;
        this.x = this.puck.offsetLeft;
        this.y = this.puck.offsetTop;
        this.xSpeed = 5;
        this.ySpeed = 0;
        this.pddleWidth=8;
        this.pddleHeight=100;
        this.puckSide=20;
        var thisObj = this;
        this.targets={
            "top": [window.innerWidth/2,0],
            "left": [0,window.innerHeight/2],
            "bottom": [window.innerHeight, window.innerHeight/2],
            "right": [window.innerHeight/2, window.innerHeight]
        }
        thisObj.puckMovement();
    }
    puckMovement() {
        var thisOb = this;
        debugger;
        var animations = function(){
            var thisObj=thisOb;
            var animate =function (timestamp) {
                var thisObj1=thisObj;
                var start=null;
                /*if(thisObj1.y < 0 || thisObj1.y + thisObj1.puckSide>window.innerHeight){
                    thisObj1.ySpeed *= -1;
                }//check condition for puck touching top and bottom edge
                var intersection = function (ax,ay,ah,aw,bx,by,bs) {
                    ax <= bx + bs && ay < by + bs && ay + 100 > by + bs;
                }; // check condition for puck stricking the paddle
                thisObj1.pddle=thisObj1.xSpeed<0?thisObj1.player1:thisObj1.player2;
                console.log(thisObj1.pddle);
                if(intersection(thisObj1.pddle.offsetLeft,thisObj1.pddle.offsetTop,thisObj1.pddleHeight,thisObj1.pddleWidth,thisObj1.puck.offsetLeft,thisObj1.puck.offsetTop,thisObj1.puckSide)){
                    //thisObj1.xSpeed *= -1;
                }*/
                if (!start) start = timestamp;
                var progress = timestamp - start;
                thisObj1.puck.style.left = Math.min(progress / 10, 200) + "px";
                thisObj1.puck.style.top = Math.min(progress / 10, 200) + "px";
                if (progress < 20000) {
                    window.requestAnimationFrame(animate);
                }
            }
            window.requestAnimationFrame(animate);
        }
        animations();
    }
}