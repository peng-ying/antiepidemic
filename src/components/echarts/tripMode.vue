<template>
  <!-- 验码出行方式 -->
  <div id="tripMode" style="width:100%;height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['echartsData'],
  created() {
    
  },
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById('tripMode'));

      
      var data = [
          {
              name: '方式一',
              value: 54,
              color: ['#83A1B0', '#424A5F']
          },{
              name: '方式二',
              value: 44,
              color: ['#FF7A7A', '#D12727']
          },{
              name: '方式三',
              value: 35,
              color: ['#F1F35B', '#A3A513']
          },{
              name: '方式四',
              value: 90,
              color: ['#44EE54', '#078C0D']
          }]
          
          var titleArr= [], seriesArr=[];
          colors=[['#83A1B0', '#424A5F'], ['#FF7A7A', '#D12727'], ['#F1F35B', '#A3A513'], ['#44EE54', '#078C0D']]
          data.forEach(function(item, index){
              titleArr.push(
                  {
                      text:item.name,
                      left: index * 20 + 10 +'%',
                      top: '58%',
                      textAlign: 'center',
                      textStyle: {
                          fontWeight: 'normal',
                          fontSize: '16',
                          color: '#80C5FF',
                          textAlign: 'center',
                      },
                  }        
              );
              seriesArr.push(
                  {
                      name: item.name,
                      type: 'pie',
                      clockWise: false,
                      radius: [50, 60],
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
                                  fontWeight: '10',
                                  color:  '#FFFFFF'
                              }
                          }
                      },
                      hoverOffset: 8,
                      center: [index * 20 + 10 +'%', '50%'],
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
                                      color: "#1B5079"
                                  },
                                  emphasis: {
                                      color: "#1B5079"
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
                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                          offset: 0,
                                          color: '#1BB1FF' // 0% 处的颜色 浅
                                      }, {
                                          offset: 1,
                                          color: '#0C51FF' // 100% 处的颜色 深
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
        
          
      option = {
          // backgroundColor: "#fff",
          title:titleArr,
          series: seriesArr
      }

      myChart.setOption(option)
    }
  },
}
</script>