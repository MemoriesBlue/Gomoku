function setTargetHandler(e) {
    if(!Started){
        return;
    }
    clearTargetTip();
    var chessboardPos = canvas.getBoundingClientRect();
    var mousePosX = e.pageX - chessboardPos.left;
    var mousePosY = e.pageY - chessboardPos.top;
    var offsetX = Math.round((mousePosX - baseX) / gap);
    var offsetY = Math.round((mousePosY - baseY) / gap);
    if((offsetX >= 0) && (offsetX <= gapNum) && (offsetY >= 0) && (offsetY <= gapNum)){
        if (chessboard[offsetX][offsetY] != 0) {
            return;
        }
        drawTargetTip(offsetX, offsetY); 
    }
}


function clickHandler(e) {
    if(!Started){
        return;
    }
    var chessboardPos = canvas.getBoundingClientRect();
    var mousePosX = e.pageX - chessboardPos.left;
    var mousePosY = e.pageY - chessboardPos.top;
    var offsetX = Math.round((mousePosX - baseX) / gap);
    var offsetY = Math.round((mousePosY - baseY) / gap);
    if (chessboard[offsetX][offsetY] != 0) {
        //原来的位置已经有棋子了
        return;
    }
    putChess(offsetX, offsetY);
    if (judge(offsetX, offsetY, chessboard[offsetX][offsetY])) {
        gameOver();
    } else {
        var object = computerAlgorithm(offsetX, offsetY, 1);
        putChess(object.offsetX, object.offsetY);
        if (judge(object.offsetX, object.offsetY, chessboard[object.offsetX][object.offsetY])) {
            gameOver();
        }
    }
}

function p2ClickHandler(e){
    if(!Started){
        return;
    }
    var chessboardPos = canvas.getBoundingClientRect();
    var mousePosX = e.pageX - chessboardPos.left;
    var mousePosY = e.pageY - chessboardPos.top;
    var offsetX = Math.round((mousePosX - baseX) / gap);
    var offsetY = Math.round((mousePosY - baseY) / gap);
    if (chessboard[offsetX][offsetY] != 0) {
        //原来的位置已经有棋子了
        return;
    }
    putChess(offsetX, offsetY);
    if (judge(offsetX, offsetY, chessboard[offsetX][offsetY])) {
        gameOver();
    }
}

function beginButtonHandler(){
    initChessBoard();
    for (var i = 0; i <= gapNum; i++) {
        chessboard[i] = new Array();
        for (var j = 0; j <= gapNum; j++) {
            chessboard[i][j] = 0;//0表示没下棋，1表示下了黑棋，2表示下了白棋
        }
    }

    colorFlag = 1;
    var radio = document.getElementById("p2");
    if (radio.checked) {
        canvas.addEventListener("mousemove", setTargetHandler, false);
        canvas.addEventListener("click", p2ClickHandler, false);
        speak("双人对弈开始，请" + blackName + "先下棋");
    }else{
        canvas.addEventListener("mousemove", setTargetHandler, false);
        canvas.addEventListener("click", clickHandler, false);
        speak("人机对弈开始，请" + blackName + "先下棋");
    }
    blackName = document.getElementById("black").value;
    whiteName = document.getElementById("white").value;

    Started = true;
    var beginButton = document.getElementById("beginGame");
    beginButton.disabled = "disabled";
    var restartButton = document.getElementById("restart");
    restartButton.disabled = "";
}

function setComputerName(){
    document.getElementById("white").value = "电脑";
}
function initName(){
    document.getElementById("black").value = "黑棋";
    document.getElementById("white").value = "白棋";

}
function gameOver(){
    Started = false;
    var beginButton = document.getElementById("beginGame");
    beginButton.disabled = "";
    var restartButton = document.getElementById("restart");
    restartButton.disabled = "disabled";
    var radio = document.getElementById("p2");
    if (radio.checked) {
        canvas.removeEventListener("mousemove", setTargetHandler, false);
        canvas.removeEventListener("click", p2ClickHandler, false);
    }else{
        canvas.removeEventListener("mousemove", setTargetHandler, false);
        canvas.removeEventListener("click", clickHandler, false);
    }
    alert(colorFlag - 1 ? blackName + "赢" : whiteName + "赢");
    speak("游戏结束，欢迎继续游戏");
}

function restart(){
    Started = false;
    var beginButton = document.getElementById("beginGame");
    beginButton.disabled = "";
    var restartButton = document.getElementById("restart");
    restartButton.disabled = "disabled";
    var radio = document.getElementById("p2");
    if (radio.checked) {
        canvas.removeEventListener("mousemove", setTargetHandler, false);
        canvas.removeEventListener("click", p2ClickHandler, false);
    }else{
        canvas.removeEventListener("mousemove", setTargetHandler, false);
        canvas.removeEventListener("click", clickHandler, false);
    }
    initChessBoard();
    speak("游戏重新开始，请重新配置游戏选项，然后开始游戏");
}
function speak(word){
    var console = document.getElementById("tips");
    console.innerHTML = word;
}
