canvas = document.getElementById("canvao");
ctx = canvas.getContext("2d");
roverImage = "rover.png"
backgroundImage = "mars.jpg"
function add() {
backgroundImgTag = new Image();
backgroundImgTag.onload = uploadBackground;
backgroundImgTag.src = backgroundImage;

roverImgTag = new Image()
roverImgTag.onload = uploadRover;
roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

roverX = 10;
roverY = 10;
roverWidth = 100;
roverHeight = 90;

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode
    if (keyPressed == '87' || keyPressed =='38') {
        console.log('up')
        up()
    }
    if (keyPressed == '83' || keyPressed =='40') {
        console.log('down')
        down()
    }
    if (keyPressed == '65' || keyPressed =='37') {
        console.log('left')
        left()
    }
    if (keyPressed == '68' || keyPressed =='39') {
        console.log('right')
        right()
    }
}
function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
         uploadBackground();
         uploadRover();
    }
}
function down() {
    if(roverY <=500)
    {
        roverY = roverY + 10;
         uploadBackground();
         uploadRover();
    }
}
function right() {
    if(roverX <=700)
    {
        roverX = roverX + 10;
         uploadBackground();
         uploadRover();
    }
}
function left() {
    if(roverX >=0)
    {
        roverX = roverX - 10;
         uploadBackground();
         uploadRover();
    }
}