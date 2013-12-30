function initChessBoard() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.strokeStyle = "#171714";
    if (canvas.getContext) {
        cxt.lineWidth = 1;
        cxt.beginPath();
        //画横线
        for (var i = 0; i <= 14; i++) {
            cxt.moveTo(baseX, baseY + i * gap);
            cxt.lineTo(baseX + gapNum * gap, baseY + i * gap);
        }
        //画竖线
        for (var i = 0; i <= 14; i++) {
            cxt.moveTo(baseX + i * gap, baseY);
            cxt.lineTo(baseX + i * gap, baseY + gapNum * gap);
        }
        cxt.rect(baseX + Math.floor(gapNum / 4) * gap - 4, baseY + Math.floor(gapNum / 4) * gap - 4, 8, 8);
        cxt.rect(baseX + Math.ceil(gapNum * 3 / 4) * gap - 4, baseY + Math.floor(gapNum / 4) * gap - 4, 8, 8);
        cxt.rect(baseX + Math.floor(gapNum / 4) * gap - 4, baseY + Math.ceil(gapNum * 3 / 4) * gap - 4, 8, 8);
        cxt.rect(baseX + Math.ceil(gapNum * 3 / 4) * gap - 4, baseY + Math.ceil(gapNum * 3 / 4) * gap - 4, 8, 8);
        cxt.rect(baseX + Math.ceil(gapNum / 2) * gap - 4, baseY + Math.ceil(gapNum / 2) * gap - 4, 8, 8);
        cxt.closePath();
        cxt.stroke();
    }
}

function putChess(offsetX, offsetY) {
    var rg = cxt.createRadialGradient(offsetX * gap + baseX, offsetY * gap + baseY, 0, offsetX * gap + baseX, offsetY * gap + baseY, gap / 3 - 2);

    if (colorFlag == 1) {
        rg.addColorStop(0, "#000000");
        rg.addColorStop(0.8, "#1C1B19");
        rg.addColorStop(1, "#776D64");
        chessboard[offsetX][offsetY] = 1;
        speak(blackName + "已经下棋，现在轮到" + whiteName + "下" );
        colorFlag = 2;
    } else {
        rg.addColorStop(0, "#E3E5E4");
        rg.addColorStop(1, "#FFFFFF");
        chessboard[offsetX][offsetY] = 2;
        colorFlag = 1;
        speak(whiteName + "已经下棋，现在轮到" + blackName + "下" );
    }
    cxt.beginPath();
    cxt.fillStyle = rg;
    cxt.arc(offsetX * gap + baseX, offsetY * gap + baseY, gap / 3 - 2, 0, Math.PI * 2, true);
    cxt.fill();
    cxt.closePath();
}

function clearTargetTip() {
    //消除左上角的指示角
    cxt.clearRect(lastTargetX * gap + baseX - gap / 2 - 1, lastTargetY * gap + baseY - gap / 2 - 1, gap / 3, gap / 3);
    //消除左下角的指示角
    cxt.clearRect(lastTargetX * gap + baseX - gap / 2 - 1, lastTargetY * gap + baseY + gap / 5, gap / 3, gap / 3);

    //消除右上的指示角
    cxt.clearRect(lastTargetX * gap + baseX + gap / 5, lastTargetY * gap + baseY - gap / 2 - 1, gap / 3, gap / 3);

    //消除右下的指示角
    cxt.clearRect(lastTargetX * gap + baseX + gap / 5, lastTargetY * gap + baseY + gap / 5, gap / 3, gap / 3);
}

function drawTargetTip(offsetX, offsetY) {
    lastTargetX = offsetX;
    lastTargetY = offsetY;
    cxt.beginPath();
    cxt.strokeStyle = "red";
    if ((offsetX >= 0) && (offsetX <= gapNum) && (offsetY >= 0) && (offsetY <= gapNum)) {
        cxt.moveTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY - gap / 2);
        cxt.lineTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY - gap / 4);
        cxt.moveTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY - gap / 2);
        cxt.lineTo(offsetX * gap + baseX - gap / 4, offsetY * gap + baseY - gap / 2);

        cxt.moveTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY - gap / 2);
        cxt.lineTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY - gap / 4);
        cxt.moveTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY - gap / 2);
        cxt.lineTo(offsetX * gap + baseX + gap / 4, offsetY * gap + baseY - gap / 2);

        cxt.moveTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY + gap / 2);
        cxt.lineTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY + gap / 4);
        cxt.moveTo(offsetX * gap + baseX - gap / 2, offsetY * gap + baseY + gap / 2);
        cxt.lineTo(offsetX * gap + baseX - gap / 4, offsetY * gap + baseY + gap / 2);

        cxt.moveTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY + gap / 2);
        cxt.lineTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY + gap / 4);
        cxt.moveTo(offsetX * gap + baseX + gap / 2, offsetY * gap + baseY + gap / 2);
        cxt.lineTo(offsetX * gap + baseX + gap / 4, offsetY * gap + baseY + gap / 2);

        cxt.stroke();
        cxt.closePath();
    }
}