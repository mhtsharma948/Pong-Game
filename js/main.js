"use strict";

var main = (function () {
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var puck = document.getElementById("puck");

    var a = new Player(player1, "player1");
    var b = new Player(player2, "player2");
    // debugger;
    var c = new Puck(puck,player1,player2);
})();
