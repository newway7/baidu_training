
var myChartBar = echarts.init(document.getElementsByClassName('bar'));
var myChartLine = echarts.init(document.getElementsByClassName('line'));
option1 = {
    title: {
        text: '销量',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['销量']
    },
    toolbox: {
        show: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}个'
        }
    }],
    series: [ //系列列表
        {
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
        }
        
    ]
};