<template>
<!-- 打卡人群健康情况 -->
  <div id="peopleHealth" style="width: 100%;height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['echartsData'],
  created: {

  },
  methods:{
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById('peopleHealth'));

      var data = [    
        {
            name: '健康',
            value: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#149FFF' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#72CDFF' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }, {
            name: '发热',
            value: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF7D09' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#FFC17E' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }, {
            name: '疑似',
            value: 20,
              itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFBD3F' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#FFD78C' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }, {
            name: '确诊',
            value: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF4D5A' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#FF7172' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }, {
            name: '已治愈',
            value: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0C53FF' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#1AABFF' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }, {
            name: '其他',
            value: 5,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6CCBFF' // 100% 处的颜色 深
                    }, {
                        offset: 1,
                        color: '#6CCBFF' // 0% 处的颜色 浅
                    }], false),
                },
                emphasis: {
                    // color: "#ffa600"
                }
            },
        }
    ];

    let option = {
        backgroundColor: '#05274C',
        grid: {
          left: '20%'  
        },
        title: {
            text: '打卡',
            subtext: '人群健康',
            textStyle: {
                color: '#FFFFFF',
                fontSize: 16,
                align: 'center'
            },
            subtextStyle: {
                fontSize: 16,
                color: ['#FFFFFF']
            },
            x: 'center',
            y: '45%',
        },
        legend: {
            show:true,
            data: ['健康', '发热', '疑似','确诊','已治愈','其他'],
            textStyle: {
                color: '#80C5FF'
            },
            width: '20',
            top: '20',
            right: '20'
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function(params) {
            var tipHtml = '';
        var data = params.data;
        console.log(params)
        return tipHtml = `
        <div style="padding: 10px;width:155px;height: auto;background: #072D4E">
            <span style="fontSize: 15px;"><span style="color: #80C5FF">${data.name}人数：</span>${data.value}人</span><br />
            <span style="fontSize: 15px;"><span style="color: #80C5FF">${data.name}人数占比：</span>${params.percent.toFixed(0)}%</span><br />
        </div>
        `
          }
        },
        series: [
            {
                type: 'pie',
                radius: ['55', '80'],
                labelLine: {
                    normal: {
                        length: 40,
                        length2: 70,
                        lineStyle: {
                            type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: (params)=>{
                            console.log(params);
                            return '{c|'+params.percent.toFixed(0)+'%}'
                        },
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, -50],
                        height: 70,
                        fontSize: 14,
                        align: 'left',
                        color: '#ffffff',
                        rich: {
                            b: {
                                fontSize: 12,
                                lineHeight: 20,
                                color: '#41B3DC',
                                padding: [0, 0, 5, 0]
                            },
                            c: {
                                fontSize: 20,
                                lineHeight:20,
                                color: '#ffffff'
                            }

                        }
                    }
                },
                data: data,
            },
        ]
      };

      myChart.setOption(option)

      setTimeout(function (){        
        window.addEventListener('resize', function () {
            myChart.resize();
        })
      }, 50)
    }
  }
}
</script>