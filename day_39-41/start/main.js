// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}


function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() {//画一个球
  ctx.beginPath();//开始一段新的路径
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {//运行一次x，y变化一次
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);//右边边界
  }

  if ((this.x -this.size) <= 0) {
    this.velX = -(this.velX);
    //左边边界，this.x不断减小；在this.x<=-半径时变方向；
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
    //下边边界，this.y不断增大，在离边界距离<=半径的时候变方向
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);//上边边界，球直接消失不见
  }

  this.x += this.velX;//(this.x - this.size) <= 0的情况，this.size为负数；
  this.y += this.velY;
}
var balls = [];
function loop() {//画板背景颜色。
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  //也就是让之前的视图留下来一点点，从而你可以看到小球运动时的轨迹。
  //如果你将 0.25 设置成 1 时，你就完全看不到了。试着改变其中的值查看造成的影响。
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {//一共25个球
    var ball = new Ball(
      random(0,width),//x坐标
      random(0,height),//y坐标
      random(-7,7),//x方向
      random(-7,7),//y方向
      randomColor(),//颜色 新的技能get
      random(10,20)//半径；
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();//先画球
    balls[i].update();//运动一次
  }

  requestAnimationFrame(loop);//不断循环loop函数；永不停止
}
loop();