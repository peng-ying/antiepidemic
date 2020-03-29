<template>
  <div :id="id" style="width: 100%;height: 100%">
    <!-- 打卡和验码 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      xAxisData: [],
      check: [],
      passRatio: []
    }
  },
  props: ['id', 'echartsData'],
  created() {
    this.$nextTick(() => {
      this.initEcharts()
    })
  },
  watch: {
    echartsData: function(newV, oldV) {
      newV.map(item => {
        // debugger
        this.xAxisData.push(item.reportDate.slice(5))
        this.check.push(item.checkTotal)
        this.passRatio.push(item.checkPassRatio)
      })
      this.xAxisData = this.xAxisData.reverse()
      this.initEcharts()
    }
  },
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById(this.id));

      let option = {
        color: ['#45A3E3','#90D887'],
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                show: true,
                trigger: 'axis'
            },
            backgroundColor: '#05325E',
            textStyle: {
                color: '#80C5FF',
            },
            formatter: (params) => {
                // console.log(params)
                return (
                    `
                    日期：${params[0].name}<br />${params[0].seriesName}: ${params[0].value}<br />${params[1].seriesName}: ${params[1].value}
                    `
                )
            },
        },
          grid: {
              left: '10%',
              top: '25%',
              bottom: '15%',
              right: '10%',
          },
          legend: {
              type: "scroll",
              // right: '5%',
              data:['验码次数','通过率'],
              itemWidth:18,
              itemHeight:12,
              textStyle: {
                  fontSize:14,
                  color: 'white'
              },
              // formatter:  (name) => {
              //   return `${name} + `
              // }
          },
          yAxis: [
              {
                  type: 'value',
                  // position: 'left',
                  yAxisIndex: 0,
                  nameTextStyle: {
                      color: '#00FFFF'
                  },
                  splitLine: {
                      // lineStyle: {
                      //     type: 'dashed',
                      //     color: 'rgba(135,140,147,0.8)'
                      // }
                      show: false
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: '#EDFFFF',
                          width: '1'
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      formatter: '{value}',
                      fontSize: 14,
                      color: '#F0FBFF'
                  },
                  // minInterval : 15
              },
              {
                  type: 'value',
                  yAxisIndex: 1,
                  nameTextStyle: {
                      color: '#00FFFF'
                  },
                  splitLine: {
                      // lineStyle: {
                      //     type: 'dashed',
                      //     color: 'rgba(135,140,147,0.8)'
                      // }
                      show: false
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: '#EDFFFF',
                          width: '1'
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      formatter: '{value}',
                      fontSize: 14,
                      color: '#F0FBFF'
                  },
                  // minInterval : 15
              }
          ],
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      show: false
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: '#EDFFFF',
                          width: '1'
                      }
                  },
                  axisLabel: {
                      inside: false,
                      textStyle: {
                          fontWeight: 'normal',
                          fontSize: '14',
                          lineHeight: 22
                      }

                  },
                  //-----
                  data: this.xAxisData,
              },
          ],
          series: [
              {
                  symbolSize: 6,
                  name: '验码次数',
                  type: "line",
                  yAxisIndex: 0,
                  data: this.check,
                  symbol: 'circle',
                  itemStyle: {
                      normal: {
                          // borderWidth: 10,
                          color: '#45A3E3'
                      }
                  },
                  label:{
                      show: true,
                      color: '#1AACFA'
                  }
              },
              {
                  symbolSize: 6,
                  name: '通过率',
                  type: "line",
                  yAxisIndex: 1,
                  data: this.passRatio ,
                  symbol: 'circle',
                  itemStyle: {
                      normal: {
                          // borderWidth: 10,
                          color: '#90D887'
                      }
                  },
                  label:{
                      show: true,
                      color: '#77DD5D'
                  }
              }], 
        };

        myChart.setOption(option)
    }
  }
}
</script>