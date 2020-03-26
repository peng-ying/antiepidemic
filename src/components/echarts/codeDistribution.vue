<template>
<!-- 健康码发布情况 -->
  <div id="codeDistribution" style="width:100%;height:100%"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['echartsData'],
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    })
  },
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById('codeDistribution'));

      var data = [
        {
            name: '灰码',
            value: 54,
            color: ['#83A1B0', '#424A5F']
        },{
            name: '红码',
            value: 44,
            color: ['#FF7A7A', '#D12727']
        },{
            name: '黄码',
            value: 35,
            color: ['#F1F35B', '#A3A513']
        },{
            name: '绿码',
            value: 90,
            color: ['#44EE54', '#078C0D']
        }]
          
        var titleArr= [], seriesArr=[];
        let colors=[['#83A1B0', '#424A5F'], ['#FF7A7A', '#D12727'], ['#F1F35B', '#A3A513'], ['#44EE54', '#078C0D']]
        data.forEach((item, index) => {
            titleArr.push(
                {
                    text:item.name,
                    left: index * 25 + 12 +'%',
                    top: '58%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: '100',
                        fontFamily:'DINNextW1G',
                        fontSize: '14',
                        color: colors[index][0],
                        textAlign: 'center',
                    },
                }        
            );
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    left: '10',
                    radius: [35, 40],
                    startAngle: -130,
                    itemStyle:  {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    label: {
                        normal: {
                            formatter: item.value + '%',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '22',
                                fontWeight: 'normal',
                                color:  colors[index][0]
                            }
                        }
                    },
                    hoverOffset: 5,
                    center: [index * 25 + 12 +'%', '50%'],
                    data: [
                        {// 空白部分
                            value: 30,
                            itemStyle: {
                                normal: {
                                    color: "transparent"
                                },
                                emphasis: {
                                    color: "transparent"
                                }
                            },
                            
                        },
                        {// 灰色部分
                            value: 100-item.value,
                            itemStyle: {
                                normal: {
                                    color: "#0C2B4A"
                                },
                                emphasis: {
                                    color: "#0C2B4A"
                                }
                            },
                            hoverAnimation:false,
                            hoverLink:false,
                            
                            emphasis:{
                                label: {
                                  show:false
                                }
                            }
                        },
                        {
                            value: item.value,
                            name: '税种五',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: item.color[0] // 0% 处的颜色 浅
                                    }, {
                                        offset: 1,
                                        color: item.color[1] // 100% 处的颜色 深
                                    }], false),
                                },
                                emphasis: {
                                    // color: "#ffa600"
                                }
                            },
                            emphasis:{
                                label: {
                                    show:false
                                }
                            }
                        },
                    ]
                }    
            )
        });
        
          
      let option = {
          // backgroundColor: "#fff",
          title:titleArr,
          series: seriesArr
      }

      myChart.setOption(option)
    }
  }
}
</script>