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
    this.text = size;

}
Ball.prototype.draw = function () { //画一个球；
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = `$(4*this.size/5)px Arial`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(`${this.text}`, this.x, this.y);
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
Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        //任意其他小球
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= this.size + balls[j].size) { //两球相撞；

            balls[j].text = balls[j].text - 1; //balls[j]的数值减少；
            if (balls[j].text <= 0) {
                balls.splice(j, 1)//splice返回的是被删除元素
                return
            }
            /*
             *改变小球的方向
             */
             let x1 = balls[j].x;
             let y1 = balls[j].y; //静止的小球；
             let x0 = this.x;
             let y0 = this.y;
             let vx = this.velX;
             let vy = this.velY;

           //console.log(((x1 - x0) * vx + (y1 - y0) * vy));
            //console.log(Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0))+'+'+Math.sqrt(vx * vx + vy * vy));
            // //小球速度与(x1,y1)-(x0,y0)的夹角；
             let Q = Math.acos(((x1 - x0) * vx + (y1 - y0) * vy) /(Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0))*Math.sqrt(vx * vx + vy * vy)));
             console.log(this.velX*this.velX+this.velY*this.velY)
             if (Q == 0) {
                 this.velX = -this.velX;
                 this.velY = -this.velY;
             } else if (this.velX < 0) {
                 //小球在右边，从右往左撞静止小球；逆时针旋转
                 //x1 = x0 * cosB + y0 * sinB
                 //y1 = -x0 * sinB + y0 * cosB
                 this.velX = this.velX * Math.cos(2 * Q) + this.velY * Math.sin(2 * Q);
                 this.velY = -this.velX * Math.sin(2 * Q) + this.velY * Math.cos(2 * Q);
                 console.log(this.velX*this.velX+this.velY*this.velY)

             } else if (this.velX > 0) { //同上 相反[x*cosA-y*sinA  x*sinA+y*cosA] 
                 this.velX = this.velX * Math.cos(2 * Q) - this.velY * Math.sin(2 * Q);
                 this.velY = this.velX * Math.sin(2 * Q) + this.velY * Math.cos(2 * Q);
                 console.log(this.velX*this.velX+this.velY*this.velY)
             }

        }

    }
}
var balls = [];
while (balls.length < 25) {
    let ball = new Ball(
        random(0, width), //x坐标;
        random(0, height), //y坐标；
        random(-15, 15), //x方向;/+
        random(-15, 15),
        randomColor(), //颜色 新的技能get
        random(10, 20) //半径；
    );
    balls.push(ball);
}

var luckyBall=new Ball(
    random(0, width), //x坐标;
    random(0, height), //y坐标；
    random(-5, 5), //x方向;/+
    random(-5, 5),
    randomColor(), //颜色 新的技能get
    random(10, 20) //半径；
);
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw(); //画球
    }
    luckyBall.draw();
    luckyBall.update(); //让球运动一次
    luckyBall.collisionDetect();
    requestAnimationFrame(loop); //不断循环loop函数；永不停止    
}
loop();