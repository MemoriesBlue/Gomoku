function judge(offsetX, offsetY, color) {
    //左右判断
    var num = 0;
    for (var i = offsetX; i >= 0; i--) {
        if (chessboard[i][offsetY] != color) {
            break;
        }
        num++;
    }
    for (var i = offsetX + 1; i <= gapNum; i++) {
        if (chessboard[i][offsetY] != color) {
            break;
        }
        num++;
    }
    if (num >= 5) return true;
    //判断上下方向
    num = 0;
    for (var i = offsetY; i >= 0; i--) {
        if (chessboard[offsetX][i] != color) {
            break;
        }
        num++;
    }
    for (var i = offsetY + 1; i <= gapNum; i++) {
        if (chessboard[offsetX][i] != color) {
            break;
        }
        num++;
    }
    if (num >= 5) return true;

    //反斜线方向判断
    num = 0;
    for (var i = offsetX, j = offsetY; (i >= 0) && (j >= 0);) {
        if (chessboard[i][j] != color) {
            break;
        }
        num++;
        i--;
        j--;
    }
    for (var i = offsetX + 1, j = offsetY + 1; (i <= gapNum) && (j <= gapNum);) {
        if (chessboard[i][j] != color) {
            break;
        }
        num++;
        i++;
        j++;
    }
    if (num >= 5) return true;

    //正斜线方向判断
    num = 0;
    for (var i = offsetX, j = offsetY; (i >= 0) && (j <= gapNum);) {
        if (chessboard[i][j] != color) {
            break;
        }
        num++;
        i--;
        j++;
    }
    for (var i = offsetX + 1, j = offsetY - 1; (i <= gapNum) && (j >= 0);) {
        if (chessboard[i][j] != color) {
            break;
        }
        num++;
        i++;
        j--;
    }
    if (num >= 5) return true;

    return false;
}

function computerAlgorithm(offsetX, offsetY, color) {
    var judgeData = new Array();
    //左右判断
    var num = 0;
    var judgeData1 = new Array();
    for (var i = offsetX; i >= 0; i--) {
        if (chessboard[i][offsetY] != color) {
            if (chessboard[i][offsetY] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = offsetY;
                judgeData1.push(object);
            }
            break;
        }
        num++;
    }
    for (var i = offsetX + 1; i <= gapNum; i++) {
        if (chessboard[i][offsetY] != color) {
            if (chessboard[i][offsetY] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = offsetY;
                judgeData1.push(object);
            }
            break;
        }
        num++;
    }

    for (var i = 0; i < judgeData1.length; i++) {
        judgeData1[i].num = num;
    }
    judgeData = judgeData.concat(judgeData1);

    //判断上下方向
    var judgeData2 = new Array();
    num = 0;
    for (var i = offsetY; i >= 0; i--) {
        if (chessboard[offsetX][i] != color) {
            if (chessboard[offsetX][i] == 0) {
                var object = new Object();
                object.offsetX = offsetX;
                object.offsetY = i;
                judgeData2.push(object);
            }
            break;
        }
        num++;
    }
    for (var i = offsetY + 1; i <= gapNum; i++) {
        if (chessboard[offsetX][i] != color) {
            if (chessboard[offsetX][i] == 0) {
                var object = new Object();
                object.offsetX = offsetX;
                object.offsetY = i;
                judgeData2.push(object);
            }
            break;
        }
        num++;
    }
    for (var i = 0; i < judgeData2.length; i++) {
        judgeData2[i].num = num;
    }
    judgeData = judgeData.concat(judgeData2);

    //反斜线方向判断
    var judgeData3 = new Array();
    num = 0;
    for (var i = offsetX, j = offsetY; (i >= 0) && (j >= 0);) {
        if (chessboard[i][j] != color) {
            if (chessboard[i][j] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = j;
                judgeData3.push(object);
            }
            break;
        }
        num++;
        i--;
        j--;
    }
    for (var i = offsetX + 1, j = offsetY + 1; (i <= gapNum) && (j <= gapNum);) {
        if (chessboard[i][j] != color) {
            if (chessboard[i][j] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = j;
                judgeData3.push(object);
            }
            break;
        }
        num++;
        i++;
        j++;
    }
    for (var i = 0; i < judgeData3.length; i++) {
        judgeData3[i].num = num;
    }
    judgeData = judgeData.concat(judgeData3);

    //正斜线方向判断
    num = 0;
    var judgeData4 = new Array();
    for (var i = offsetX, j = offsetY; (i >= 0) && (j <= gapNum);) {
        if (chessboard[i][j] != color) {
            if (chessboard[i][j] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = j;
                judgeData4.push(object);
            }
            break;
        }
        num++;
        i--;
        j++;
    }
    for (var i = offsetX + 1, j = offsetY - 1; (i <= gapNum) && (j >= 0);) {
        if (chessboard[i][j] != color) {
            if (chessboard[i][j] == 0) {
                var object = new Object();
                object.offsetX = i;
                object.offsetY = j;
                judgeData4.push(object);
            }
            break;
        }
        num++;
        i++;
        j--;
    }
    for (var i = 0; i < judgeData4.length; i++) {
        judgeData4[i].num = num;
    }
    judgeData = judgeData.concat(judgeData4);

    num = -1;
    var X = -1;
    var Y = -1;
    for (var i = 0; i < judgeData.length; i++) {
        if (judgeData[i].num > num) {
            X = judgeData[i].offsetX;
            Y = judgeData[i].offsetY;
            num = judgeData[i].num;
        }
    }
    var o = new Object();
    o.offsetX = X;
    o.offsetY = Y;
    return o;
}
			