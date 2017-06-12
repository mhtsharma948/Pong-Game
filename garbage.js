/*if (thisObj.player1.offsetTop < thisObj.puck.offsetTop && thisObj.player1.offsetTop + 100 > thisObj.puck.offsetTop) {
 thisObj.xSpeed *= -1;
 }
 if (thisObj.player2.offsetTop < thisObj.puck.offsetTop && thisObj.player2.offsetTop + 100 > thisObj.puck.offsetTop) {
 thisObj.xSpeed *= -1;
 }
 * Created by hp on 06-06-2016.
 */




var intersection = function (ax,ay,ah,aw,bx,by,bh,bw) {
    ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}; // check condition for puck stricking the paddle
thisObj.pddle=thisObj.xSpeed<0?thisObj.player1:thisObj.player2;
if(intersection(thisObj.pddle.offsetLeft,thisObj.pddle.offsetTop,thisObj.pddleWidth,thisObj.pddleHeight,parseInt(thisObj.x),parseInt(thisObj.y),thisObj.puckSide,thisObj.puckSide)){
    thisObj.xSpeed *= -1;
}



//  thisObj1.x = thisObj1.pddle === thisObj1.player1 ? thisObj1.player1.offsetLeft+thisObj1.pddleWidth : thisObj1.player2.offsetLeft - thisObj1.puckSide;
//   var n = (thisObj1.puck.offsetTop + thisObj1.puckSide - thisObj1.pddle.offsetTop) / (thisObj1.pddleHeight + thisObj1.puckSide);
//   var alpha = 0.25*Math.PI*(2*n-1);
//   thisObj1.xSpeed =(thisObj1.pddle === thisObj1.player1 ? 1 : -1) * thisObj1.xSpeed * Math.cos(alpha);
//   thisObj1.ySpeed = thisObj1.ySpeed  * Math.sin(alpha);