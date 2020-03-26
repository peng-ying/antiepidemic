<template>
  <div id="people" style="width: 100%;height: 100%;"></div>
</template>

<script>
export default {
  data() {
    return {
        myData:['老年(66岁以后)', '中年(48-65岁)', '壮年(41-48岁)', '青年(18-40岁)','少年(7-17岁)', '童年(2.5岁-6岁)','幼儿(0-2.5岁)'],
        femaleValue: [1341, 24211, 46060, 41765, 61251, 88747, 66666],
        maleValue: [4723, 45523, 80739, 65923, 91583, 55555, 44445],
    }
  },
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    })
  },
  // props: [data],
  methods: {
    initEcharts() {
      // debugger
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('people'));

      myChart.setOption({
        legend:{data:['男','女'],
            textStyle: {
                color: '#fff'
            },
            selectedMode:false,
        },
        // backgroundColor: '#0b214a',
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 20,
            containLabel: true,
            width: '49%'
        }, {
            show: false,
            left: '50.5%',
            top: 60,
            bottom: 20,
            width: '0%'
        }, {
            show: false,
            right: '5%',
            top: 60,
            bottom: 20,
            containLabel: true,
            width: '42%'
        }],
        xAxis: [{
            gridIndex: 0,
            splitNumber: 2,
            type: 'value',
            inverse: true,
            axisLine: {
                show: true,
                textStyle: {
                    color: '#ccc'
                },
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ccc',
                    fontSize: 12
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid'
                }
            }
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            splitNumber: 2,
            type: 'value',
            axisLine: {
                show: true,
                textStyle: {
                    color: '#ccc'
                },
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ccc',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid',
                },
            },
        },  ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'left',
            name: '年龄段',
            nameLocation: 'start',
            nameTextStyle: {
              color: '#ffffff',
              padding: [0,350,0,0]
            },
            axisLine: {
                show: true,
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true,
                color:'#80C5FF'
            },
            data: this.myData,

        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                align: 'left'
            },
            data: this.myData,
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'right',
            name: '整体性别比',
            nameLocation: 'start',
            nameTextStyle: {
              color: '#ffffff',
              padding: [0,0,0,350]
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color:'#80C5FF'
            },
            data: ['109','202','2','6','88','52','45'],
        }, ],
        series: [{
            name: '男',
            type: 'bar',
            barGap: 20,
            barWidth: 7,
            barCateGoryGap:20,
            stack: '入',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#7BD2FF' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#0C9BFF' // 100% 处的颜色
                  }], false),
                    barBorderRadius: [30, 0, 0, 30]
                }
            },
            data: this.maleValue,
        }, {
            name: '女',
            type: 'bar',
            barGap: 20,
            barWidth: 7,
            barCateGoryGap:20,
            stack: '出',
            itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#F26DAC' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#F186B8' // 100% 处的颜色
                  }], false),
                    barBorderRadius: [0, 30, 30, 0]
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: this.femaleValue,
        }]
      })
    }
  }
}
</script>

<style lang="less">

</style>
