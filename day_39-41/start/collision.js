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

function Ball(x, y, color, size) {
    this.x = x;
    this.y = y;

    this.color = color;
    this.size = size;
}

function luckyBall(x, y, velX, velY, color, size) { //lucky运动的球，有速度；
    Ball.call(this, x, y, color, size);
    this.velX = velY;
    this.velY = velY;
}

function staticBall(x, y, color, size) { //静止的球，没有速度，但是有文字；
    Ball.call(this, x, y, color, size);
    this.text = size;

}

staticBall.prototype.draw = function () { //画有数字的静止的球；
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

luckyBall.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

luckyBall.prototype.update = function () { //碰到边界，反弹；
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
        this.velY = -(this.velY); //上边边界，不改变速度，球消失不见
    }

    this.x += this.velX;
    this.y += this.velY;
}
var balls = [];
while (balls.length < 25) { //25个静止的小球
    let ball = new staticBall(
        random(0, width), //x坐标;
        random(0, height), //y坐标
        randomColor(), //颜色 新的技能get
        random(10, 20) //半径；
    );
    balls.push(ball);
}
luckyBall.prototype.collisionDetect = function () { //lucky的小球撞到静止的小球；
    for (var j = 0; j < balls.length; j++) {
        //任意其他小球
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        let x1 = balls[j].x;
        let y1 = balls[j].y; //静止的小球；
        let x0 = this.x;
        let y0 = this.y;
        let vx = this.velX;
        let vy = this.velY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= this.size + balls[j].size) { //两球相撞；

            balls[j].text = balls[j].text - 1; //balls[j]的数值减少；
            if (balls[j].text <= 0) {
                balls.splice(j, 1) //splice返回的是被删除元素，balls[j]的数值=0时；该球消失；
                return
            }
            /*
             *改变小球的方向
             */
            let Q =Math.PI-2* Math.acos(((x1 - x0) * vx + (y1 - y0) * vy) / (Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0)) * Math.sqrt(vx * vx + vy * vy)));
//Q为两向量之间的夹角；永远为[0,pi/4)，但是存在三种情况：小球顺时针反弹，小球逆时针反弹，小球原路返回；
         // console.log(Q);


            let direction = (x1 - x0) * vy - vx * (y1 - y0); //两向量叉乘；
            //p为两圆心的向量，指向静止小球；((x1 - x0),(y1 - y0))
            //q为运动小球的速度向量；(vx,vy)

            if (direction === 0) {
                this.velX = -(this.velX);
                this.velY = -(this.velY);
            } else if (direction > 0) {

                this.velX = vx * Math.cos(Q) + vy * Math.sin(Q);
                this.velY = -vx * Math.sin(Q) + vy * Math.cos(Q);
                //p叉乘q>0 p在q的顺时针方向，q逆时针旋转；原理，自己动笔画一画就清楚了；
                //[x*cosA-y*sinA  x*sinA+y*cosA] 
            } else if (direction < 0) {
                this.velX = vx * Math.cos(Q) - vy * Math.sin(Q);
                this.velY = vx * Math.sin(Q) + vy * Math.cos(Q);
            }
            //p叉乘q<0 p在q的逆时针方向，q顺时针旋转；
            //逆时针旋转
            //x1 = x0 * cosB + y0 * sinB
            //y1 = -x0 * sinB + y0 * cosB


        }

    }
}
var runBall = new luckyBall(
    random(0, width), //x坐标;
    random(0, height), //y坐标
    random(2, 4), //x方向速度;
    random(2, 4), //y方向速度;
    randomColor(), //颜色 
    random(10, 20) //半径；
);
console.log(runBall)
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw(); //画所有的静止的球
    }
    runBall.draw();
    runBall.update(); //让球运动一次
    runBall.collisionDetect();
    requestAnimationFrame(loop); //不断循环loop函数；永不停止    
}
loop();