if (thisObj.player1.offsetTop < thisObj.puck.offsetTop && thisObj.player1.offsetTop + 100 > thisObj.puck.offsetTop) {
 thisObj.xSpeed *= -1;
 }
 if (thisObj.player2.offsetTop < thisObj.puck.offsetTop && thisObj.player2.offsetTop + 100 > thisObj.puck.offsetTop) {
 thisObj.xSpeed *= -1;
 }





var intersection = function (ax,ay,ah,aw,bx,by,bh,bw) {
    ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}; // check condition for puck stricking the paddle
thisObj.pddle=thisObj.xSpeed<0?thisObj.player1:thisObj.player2;
if(intersection(thisObj.pddle.offsetLeft,thisObj.pddle.offsetTop,thisObj.pddleWidth,thisObj.pddleHeight,parseInt(thisObj.x),parseInt(thisObj.y),thisObj.puckSide,thisObj.puckSide)){
    thisObj.xSpeed *= -1;
}







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