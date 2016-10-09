"use strict";

class Player {
    constructor(pl, type) {
        // var thisObj = this;
        this.player = pl;
        this.speed = 3;

        if (type === "player1") {
            this.upKey = 81;
            this.downKey = 65;
        } else if (type === "player2") {
            this.upKey = 80;
            this.downKey = 76;
        }

        var keyMap = {}; //To keep track of multiple key presses...
        
        window.addEventListener("keydown", function(e) {
                if (e.keyCode === this.upKey) {
                    keyMap['' + this.upKey] = e.type === "keydown";
                }

                if (e.keyCode === this.downKey) {
                    keyMap['' + this.downKey] = e.type === "keydown";
                }
        }.bind(this));

        window.addEventListener("keyup", function(e) {
                if (e.keyCode === this.upKey) {
                    keyMap['' + this.upKey] = e.type === "keydown";
                }
                if (e.keyCode === this.downKey) {
                    keyMap['' + this.downKey] = e.type === "keydown";
                }
        }.bind(this));
        console.log(this);
        var thisOb = this;
        (function loop(){
            for(var i in keyMap){
                if (keyMap[i] && parseInt(i) === thisOb.upKey) thisOb.moveUp();
                if (keyMap[i] && parseInt(i) === thisOb.downKey) thisOb.moveDown();
            }
            setTimeout(loop,3);
        })();

    }


    moveUp() {
        if (this.player.offsetTop > 0)
            this.player.style.top = this.player.offsetTop - this.speed + "px";
    }

    moveDown() {
        if ((this.player.offsetTop + 100) < window.innerHeight)
            this.player.style.top = this.player.offsetTop + this.speed + "px";
    }
    puckMovement(){
        if((this.player.offsetTop) === 0 || (this.player.offsetTop + 20) === window.innerHeight || (this.player.offsetLeft) ==== 0 || (this.player.offsetLeft + 20) === window.innerWidth)
            this.player.style.top = this.player.offsetTop * ;
    }
}



var main = (function() {
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var puck = document.getElementById("puck");

    var a = new Player(player1, "player1");
    var b = new Player(player2, "player2");
    // debugger;
    var c = new Player(puck, "puck")
})();
