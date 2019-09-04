//设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


//设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//生成随机函数
// 生成随机数的函数
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//生成随机颜色的函数
function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velY;
    this.velY = velY;
    this.color = color;
    this.size = size;
  

}
Ball.prototype.draw = function () { //画一个球；
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

}
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
        //下边边界，this.y不断增大，在离边界距离<=半径的时候变方向
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY); //上边边界，球直接消失不见
    }

    this.x += this.velX; //(this.x - this.size) <= 0的情况，this.size为负数；
    this.y += this.velY;
}
Ball.prototype.collisionDetect = function () {//撞击变色
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {//不是自己的任意其他小球
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            //两个小球的x，y坐标距离
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
}
var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);
    while (balls.length < 25) {
        var ball = new Ball(
            random(0, width), //x坐标;
            random(0, height), //y坐标；
            random(-7, 7), //x方向;
            random(-7, 7),
            randomColor(), //颜色 新的技能get
            random(10, 20) //半径；
        );
        balls.push(ball);
    }
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw(); //画球
        balls[i].update(); //让球运动一次
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop); //不断循环loop函数；永不停止    
}
loop();