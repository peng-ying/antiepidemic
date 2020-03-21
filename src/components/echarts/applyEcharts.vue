<template>
  <div id="apply" style="width: 100%;height: 100%;"></div>
</template>

<script>
export default {
  data() {
    return {

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
      debugger
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('apply'));

      myChart.setOption({
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
            console.log(params)
            return (
              `
              日期：${params[0].name}<br />${params[0].seriesName}: ${params[0].value}<br />${params[1].seriesName}: ${params[1].value}
              `
            )
          },
        },
        grid: {
          left: '10%',
          top: '10%',
          bottom: '5%',
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
            minInterval : 15
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
                  width: '2'
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
            data: ['2-9','2-10', '2-11', '2-12', '2-12', '2-13'],
          },
        ],
        series: [
          {
            symbolSize: 6,
            name: '申请人数',
            type: "line",
            yAxisIndex: 0,
            data: [23,43,54,46,56,10] ,
            itemStyle: {
                normal: {
                    borderWidth: 10,
                }
            },
          },
          {
            symbolSize: 6,
            name: '发放人数',
            type: "line",
            yAxisIndex: 0,
            data: [3,23,34,26,15,8] ,
            itemStyle: {
              normal: {
                  borderWidth: 10,
              }
            }
          }]
      })
    }
  }
}
</script>

<style lang="less">

</style>
