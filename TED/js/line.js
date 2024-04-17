// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('line'));

// 使用 XMLHttpRequest 对象从 word_count.txt 文件中获取数据
var request = new XMLHttpRequest();
request.open('GET', './word_count.txt', true);

request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var rawText = request.responseText;
        var lines = rawText.split('\n');
        var years = [];
        var counts = [];
        var diffCounts = [];

        // 解析每行的年份和人数，并存入相应数组
        lines.forEach(function(line) {
            var data = line.split(' ');
            years.push(data[0]);
            counts.push(parseInt(data[1], 10)); // 使用以10进制解析人数
        });

        for (var i = 0; i < counts.length; i++) {
            if (i === 0) {
                diffCounts.push(0); // 第一个数据点的差值为0
            } else {
                diffCounts.push(counts[i] - counts[i - 1]);
            }
        }

        // 指定图表的配置项和数据
        var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return '截至第' + params[0].name + '篇: ' + '单词数'+ params[0].value + '个<br/>' + '新增: ' + (params[1].value !== 0 ? params[1].value : '无数据');
            }
        },
        xAxis: {
            data: years, // 使用从文件中获取的年份数据
            axisLine: {
                lineStyle: {
                    color: '#151d29',
                    width: 2
                }
            },
            axisLabel:{
                textStyle: {
                    color: '#333', // 字体颜色
                    fontSize: 8, // 字体大小
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                show: true,
                interval: 400,
                axisLine: {
                    lineStyle: {
                        color: '#151d29',
                        width: 2
                    }
                },
                axisLabel:{
                    textStyle: {
                        color: '#333', // 字体颜色
                        fontSize: 8, // 字体大小
                    }
                }
            },
            {
                type: 'value', // 添加第二个Y轴
                show: true,
                interval: 400,
                axisLine: {
                    lineStyle: {
                        color: '#151d29',
                        width: 2
                    }
                },
                axisLabel:{
                    textStyle: {
                        color: '#333', // 字体颜色
                        fontSize: 8, // 字体大小
                    }
                }
            }
        ],
        series: [
            {
                type: 'line',
                data: counts,
                yAxisIndex: 0,
                itemStyle: {
                    color: '#2966cf'
                }
            },
            {
                type: 'line', // 添加额外的折线图类型
                data: diffCounts, // 使用计算得到的差值数据
                yAxisIndex: 1,
                itemStyle: {
                    color: '#ecbc41' // 设置额外折线的颜色
                }
            },
            {
                type: 'bar',
                data: counts,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#aed0ee' },
                        { offset: 1, color: '#f6f9e4' }
                    ])
                }
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
};

request.send();