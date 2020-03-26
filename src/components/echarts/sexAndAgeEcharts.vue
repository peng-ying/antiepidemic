<template>
  <div id="age" style="width: 100%;height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  // props: [echartsData],
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById('age'));

      let option = {
        // legend: {},
        tooltip : {
          show:true,
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [{
          type: 'value',
          gridIndex: 0,
          name: '年龄段',
          inverse: true,
          splitLine: {
              show: false
          },
          axisTick:{
              show:false
          },
          axisLabel: {
              color: '#80C5FF',
              formatter: '{value}%'
          },
          axisLine: {
              lineStyle: {
                  color: '#ffffff'
              }
          },
          minInterval : 20
        }, {
          type: 'value',
          name:'整体性别比',
          gridIndex: 1,
          splitLine: {
              show: false
          },
          axisTick:{
              show:false
          },
          axisLabel: {
              color: '#80C5FF',
              formatter: '{value}%'
          },
          axisLine: {
              lineStyle: {
                  color: '#ffffff'
              }
          },
          minInterval : 20
        }],
        yAxis: [{
          gridIndex: 0,
          type: 'category',
          axisTick:{
              show:false
          },
          axisLine:{
              show: false,
          },
          axisLabel: {
              color: '#80C5FF'
          },
          data : [
          '幼儿(0-2.5岁)',
          '童年(2.5岁-6岁)',
          '少年(7岁-17岁)',
          '青年(18岁-40岁)',
          '壮年(41岁-48岁)',
          '中年(48岁-65岁)',
          '老年(66岁以后)']
        }, {
          gridIndex: 1,
          axisTick:{
              show:false
          },
          axisLine:{
              show: false
          },
          type: 'category',
          axisLabel: {
              color: '#80C5FF',
              // formatter: (value) => {
              //     console.log(value)
              // }
          },
          data : [ '120', '12', '58', '109', '56', '45', '17' ],
          position:'right'
        }],
        grid: [{
            right: '50%',
        }, {
            left: '50%'
        }],
        series: [
          // These series are in the first grid.
          {
            type: 'bar',
            name: '男性',
            barWidth: 20,
            seriesLayoutBy: 'row',
            itemStyle:{
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#7BD2FF' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: '#0C9BFF' // 100% 处的颜色
              }], false),
            },
            data: [{
                  name: '郴州市',
                  value: 41.1
              },
              {
                  name: '张家界',
                  value: 30.4
              },
              {
                  name: '永州市',
                  value: 65.1
              },
              {
                  name: '湘西市',
                  value: 53.1
              },
              {
                  name: '郴州市',
                  value: 41.1
              },
              {
                  name: '张家界',
                  value: 30.4
              },
              {
                  name: '永州市',
                  value: 65.1
              },
            ]
          },
          {
              type: 'bar',
              name: '女性',
              barWidth: 20,
              seriesLayoutBy: 'row',
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle:{
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#F26DAC' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: '#F186B8' // 100% 处的颜色
                  }], false),
              },
              data:  [{
                  name: '永定区',
                  value: 86.5
              },
              {
                  name: '永兴县',
                  value: 92.1
              },
              {
                  name: '嘉禾县',
                  value: 85.7
              },
              {
                  name: '芷江县',
                  value: 83.1
              },
              {
                  name: '永兴县',
                  value: 92.1
              },
              {
                  name: '嘉禾县',
                  value: 85.7
              },
              {
                  name: '芷江县',
                  value: 83.1
              }
          ]
        }
      ]
    };

     myChart.setOption(option)
    }
  }
}
</script>
