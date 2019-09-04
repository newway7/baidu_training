Bar.prototype = {

  strokewidth: 1,

  colors: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8', '#fc97af', '#f7f494', '#87f7cf', '#f7c5a0'],

  color: '#666',

  fillColor: '#456',

  HTML: '',

  barWidth: 0,

  itemWidth: 0,

  barOffset: 0,

  valueMax: -Infinity,

  /**起点x坐标
  
     * 创建一条线段
  
     *
  
     * @param {*} x1 起点x坐标
  
     * @param {*} y1 起点y坐标
  
     * @param {*} x2 终点x坐标
  
     * @param {*} y2 终点y坐标
  
     * @returns 该线段HTML字符串
  
     * 
  
     */

  createLine: function (x1, y1, x2, y2) {

    return `<line x1=${x1} y1=${y1} x2=${x2} y2=${y2}
  
      style="stroke:${this.color};stroke-width:${this.strokewidth}"/>` //两点相连。

  },

  /**
  
     * 创建一个矩形
  
     *
  
     * @param {*} x 矩形x轴坐标
  
     * @param {*} y 矩形y轴坐标
  
     * @param {*} w 矩形的宽
  
     * @param {*} h 矩形的高
  
     * @returns HTML字符串
  
     */

  createRect: function (x, y, w, h) {

    return `<rect x=${x} y=${y} width=${w} height=${h}
  
      style="fill:${this.fillColor};"/>` //左上角的坐标（x,y）

  },

  /**
  
     *创建一段文字SVG
  
     *
  
     * @param {*} x 中点X轴坐标
  
     * @param {*} y 中点Y轴坐标
  
     * @param {*} text 文字内容
  
     * @returns HTML 字符串
  
     */

  createText: function (x, y, text) { //横纵坐标位置

    return `<text x=${x} y=${y} fill="${this.color}" style="text-anchor: middle;font-size:12px">${text}</text>`

  },

  /**
  
     * 计算文字X轴坐标
  
     *
  
     * @param {*} i 第几个
  
     * @returns 坐标值
  
     */

  getTextX: function (i) {

    return this.barOffset + i * this.barWidth //第一个中点+间距

  },

  /**
  
     * 计算条的X坐标
  
     *
  
     * @param {*} i 第几个
  
     * @param {*} k 第几组
  
     * @returns 坐标值
  
     */

  getBarX: function (i, k) {

    return this.barOffset + i * this.barWidth + this.itemWidth * k - this.fillWidth / 2

  },

  /**
  
     * 计算条的Y坐标
  
     *
  
     * @param {*} val 数值
  
     * @returns 坐标值
  
     */

  getBarY: function (val) {

    return this.contentHeight - this.getBarHeight(val)

  },

  /**
  
     * 根据传入数值获取在柱状上的高度
  
     *
  
     * @param {*} val 数值
  
     * @returns 高度
  
     */

  getBarHeight: function (val) {

    return (val / this.valueMax) * this.contentHeight;

  },

  /**
  
     * 绘制一组柱子
  
     *
  
     * @param {*} data 数据
  
     * @param {*} k 第几组
  
     * @returns HTML字符串
  
     */

  drowBar: function (data, k) {

    let HTML = ''

      ,
      len = data.length;

    for (let i = 0; i < len; i++) {

      HTML += this.createRect(this.getBarX(i, k), this.getBarY(data[i]), this.itemWidth, this.getBarHeight(data[i]))
      //itemWidth=bar宽度； getBarHeight(data[i])高度；
      //getBarY=this.contentHeight - this.getBarHeight(data[i])  y轴顶点为(Offset,0)
      //getBarX=this.barOffset + i * this.barWidth + this.itemWidth * k - this.fillWidth / 2 x轴坐标，
      //fillWidth = barWidth * 0.7; ===this.itemWidth * k
      //barWidth = this.contentWidth / 12;
      //barOffset=this.barWidth / 2 + this.offset; 1月坐标的中点。
    }

    return HTML;

  },

  /**
  
     * 绘制所有的柱子
  
     *
  
     * @param {*} data 数据
  
     * @returns HTML字符串
  
     */

  drowBars: function (data) {

    if (Array.isArray(data[0])) {//data[0]是否为数组，item不为1 data[[1i,2i,3i,4i...12i],[]...[1k,2k,3k,4k,5k...12k]]

      let bar = ''

      this.itemWidth = this.fillWidth / data.length;

      data.forEach((element, index) => {

        this.fillColor = this.colors[index];

        bar += this.drowBar(element, index);

      });

      return bar;

    } else {

      this.itemWidth = this.fillWidth;

      return this.drowBar(data, 0);

    }

  },

  /**
  
     * 根据数据绘制柱状图
  
     *
  
     * @param {*} data 柱状图数据
  
     */

  drow: function (data) {

    this.valueMax = this.getMax(data.data);

    this.fillColor = this.colors[0];

    this.HTML = '';

    // 绘制坐标轴

    this.HTML += this.createLine(this.offset, this.contentHeight + 1, this.width, this.contentHeight + 1); //x轴

    this.HTML += this.createLine(this.offset, 0, this.offset, this.contentHeight + 1); //y轴

    for (let i = 0; i < 12; i++) {

      // 绘制文字

      this.HTML += this.createText(this.getTextX(i), this.height, data.text[i]);

      // // 绘制柱子

      // this.HTML += this.createRect(this.getBarX(i),this.contentHeight-100,100);

    }

    this.HTML += this.createText(0, 10, this.valueMax)//标注y轴最大值

    this.HTML += this.createText(0, this.contentHeight, 0)//标注y轴最小值

    this.HTML += this.drowBars(data.data)//bar

    this.Node.innerHTML = this.HTML;

  },

  /**
  
     * 初始化
  
     *
  
     */

  init: function () {

    this.barWidth = this.contentWidth / 12;

    this.barOffset = this.barWidth / 2 + this.offset;

    this.fillWidth = this.barWidth * 0.7;

  },

  /**
  
     * 工具函数，获取数组或二维数组的最大值
  
     *
  
     * @param {*} arr 数组
  
     * @returns 最大值
  
     */

  getMax: function (arr) { //获得最大值；

    let max = -Infinity;

    if (Array.isArray(arr[0])) {

      arr.forEach(element => {

        element.forEach(ele => {

          max = max > ele ? max : ele;

        });

      });



    } else {

      arr.forEach(ele => {

        max = max > ele ? max : ele;

      });

    }

    return max;

  }

}

/**
  
 * 柱状图的构造函数
  
 *
  
 * @param {*} node 绘制元素所在的SVG节点
  
 */

function Bar(node) {

  this.Node = node;

  this.width = node.width.animVal.value;//画布宽度

  this.height = node.height.animVal.value;//画布高度

  this.offset = 15;

  this.contentWidth = this.width - this.offset; //柱状图宽度

  this.contentHeight = this.height - this.offset; //柱状图高度

  this.init();

}



const bar = new Bar(BARBOX); //const BARBOX = $('bar-box')