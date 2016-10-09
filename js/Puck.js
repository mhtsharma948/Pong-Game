"use strict";
class Puck {
    constructor(pu,pl1,pl2,pltype) {
        this.puck = pu;
        this.player1=pl1;
        this.player2=pl2;
        this.x = this.puck.offsetLeft;
        this.y = this.puck.offsetTop;
        this.xSpeed = 8;
        this.ySpeed = 11;
        this.pddleWidth=8;
        this.pddleHeight=100;
        this.puckSide=20;
        this.player1Points=0;
        this.player2Points=0;

        var thisObj = this;
        thisObj.puckMovement();
    }
    puckMovement() {
        var thisOb = this;
        var animations = function(){
            var thisObj=thisOb;
            function animate() {
                var thisObj1=thisObj;
                var player1Score = document.getElementById("scoreBord2");
                var player2Score = document.getElementById("scoreBord3");
                if(thisObj1.puck.offsetLeft > window.innerWidth)
                {
                    thisObj1.puck.style.left="50%";
                    thisObj1.puck.style.top="50%";
                    thisObj1.player1Points+=1;
                    player1Score.innerHTML = "player1 :  "+thisObj1.player1Points;
                }
                if(thisObj1.puck.offsetLeft < 0)
                {
                    thisObj1.puck.style.left="50%";
                    thisObj1.puck.style.top="50%";
                    thisObj1.player2Points+=1;
                    player2Score.innerHTML = "player2 :  "+thisObj1.player2Points;
                }
                if(thisObj1.player1Points >= 12 || thisObj1.player2Points >= 12)
                {
                    if(thisObj1.player1Points>=12)
                    {
                        player1Score.innerHTML = "**PLAYER1 WON**";
                    }
                    if(thisObj1.player2Points>=12)
                    {
                        player2Score.innerHTML = "**PLAYER2 WON**";
                    }
                    return;
                }
                if(thisObj1.puck.offsetTop < 0 || thisObj1.puck.offsetTop + thisObj1.puckSide>window.innerHeight){
                   //  var temp = thisObj1.ySpeed < 0 ? 0 - thisObj1.offsetTop : window.innerHeight - (thisObj1.puck.offsetTop * thisObj1.puckSide);
                    // thisObj1.offsetTop *= 2 * temp;
                    thisObj1.ySpeed *= -1;
                }//check condition for puck touching top and bottom edge

                var intersection = function (ax,ay,ah,aw,bx,by,bs) {
                    return ax <= bx + bs && ay < by + bs && bx < ax + aw && by < ay+ ah;
                }; // check condition for puck stricking the paddle

                thisObj1.pddle=thisObj1.xSpeed<0?thisObj1.player1:thisObj1.player2;
                if(intersection(thisObj1.pddle.offsetLeft,thisObj1.pddle.offsetTop,thisObj1.pddleHeight,thisObj1.pddleWidth,thisObj1.puck.offsetLeft,thisObj1.puck.offsetTop,thisObj1.puckSide)){
                    thisObj1.xSpeed *= -1;
                }
                thisObj1.puck.style.left = thisObj1.puck.offsetLeft + thisObj1.xSpeed + "px";
                thisObj1.puck.style.top = thisObj1.puck.offsetTop + thisObj1.ySpeed + "px";
                window.requestAnimationFrame(animate);
            }
            window.requestAnimationFrame(animate);
        }
        animations();
    }

}