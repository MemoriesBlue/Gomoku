var baseX = 50;
var baseY = 50;
var gap = 30;
var gapNum = 14;
var canvas = document.getElementById("chessboard");
var cxt = canvas.getContext("2d");
var lastTargetX = 0;
var lastTargetY = 0;
//1表示黑色，默认黑色先下。2表示白色。
var colorFlag = 1;

var Started = false;

var blackName = "黑棋";
var whiteNmae = "白棋";
function Chess(order, offsetX, offsetY,color) {
    this.color = color;//1表示黑棋，2表示白棋
    this.order = order;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
}

var chessboard = new Array();
for (var i = 0; i <= gapNum; i++) {
    chessboard[i] = new Array();
    for (var j = 0; j <= gapNum; j++) {
        chessboard[i][j] = 0;//0表示没下棋，1表示下了黑棋，2表示下了白棋
    }
}
