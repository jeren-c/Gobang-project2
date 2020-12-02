var chess = document.getElementsByClassName("board")[0];
var context = chess.getContext("2d");
context.strokeStyle = "#B9B9B9"
window.onload = function() {
    drawChessBoard();
}

function drawChessBoard() {
    for (var i = 0; i < 14; i++) {
        context.moveTo(15, 15 + i * 30); //start position
        context.lineTo(435, 15 + i * 30); //end position
        context.stroke(); //point connect 

        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();
    }
}