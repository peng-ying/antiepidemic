<template>
  <div :id="id" style="width: 100%;height: 100%;"></div>
</template>

<script>
export default {
  data() {
    return {
      xAxisData: [],
      apply: [],
      grant: []
    }
  },
  props: ['id', 'echartsData'],
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    })
  },
  watch: {
    echartsData: function(newV, oldV) {
      newV.map(item => {
        // debugger
        this.xAxisData.push(item.reportDate.slice(5))
        this.apply.push(item.applyTotal)
        this.grant.push(item.grantTotal)
      })
      this.xAxisData = this.xAxisData.reverse()
      this.initEcharts()
    }
  },
  methods: {
    initEcharts() {
      // debugger
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.id));

      myChart.setOption({
        color: ['#45A3E3','#90D887'],
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
              show: true,
              trigger: 'axis'
          },
          // backgroundColor: '#05325E',
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
          right: '5%',
        },
        legend: {
          type: "scroll",
          right: '5%',
          data:['申请人数','发放人数'],
          itemWidth:18,
          itemHeight:12,
          textStyle: {
            fontSize:14
          },
          textStyle:{
            color: '#EDFFFF'
          }
        },
        yAxis: [
          {
            type: 'value',
            position: 'left',
            nameTextStyle: {
              color: '#00FFFF'
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
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
                // inside: false,
                show:true,
                interval: 0,
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: '14',
                  // lineHeight: 22
                },
            },
            data: this.xAxisData
          },
        ],
        series: [
          {
            symbolSize: 6,
            name: '申请人数',
            type: "line",
            yAxisIndex: 0,
            data: this.apply,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    // borderWidth: 10,
                  color: '#45A3E3'
                },
            },
            label:{
                show: true,
                color: '#1AACFA'
            }
          },
          {
            symbolSize: 6,
            name: '发放人数',
            type: "line",
            yAxisIndex: 0,
            data: this.grant ,
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
          }]
      })
    }
  }
}
</script>

<style lang="less">

</style>
