<template>
  <!-- 验码出行方式 -->
  <div :id="id" style="width:100%;height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
            name: '方式一',
            value: 0,
            ratio: 0,
            color: ['#83A1B0', '#424A5F']
        },{
            name: '方式二',
            value: 0,
            ratio: 0,
            color: ['#FF7A7A', '#D12727']
        },{
            name: '方式三',
            value: 0,
            ratio: 0,
            color: ['#F1F35B', '#A3A513']
        },{
            name: '方式四',
            value: 0,
            ratio: 0,
            color: ['#44EE54', '#078C0D']
        }
      ]
    }
  },
  props: ['id', 'echartsData'],
  created() {
    this.$nextTick(() => {
      this.initEcharts()
    })
    // this.initEcharts()
    console.log(this.echartsData)
  },
  watch: {
    echartsData: function(newV, oldV) {
      if(newV === oldV || newV !== oldV) {
        debugger
        this.data.forEach(item => {
          if(item.name === '方式一') {
            item.value = newV.checkOneRatio * newV.checkOne
            item.ratio = newV.checkOneRatio
          } else if(item.name === '方式二') {
            item.value = newV.checkTwoRatio * newV.checkTwo
            item.ratio = newV.checkTwoRatio
          } else if(item.name === '方式三') {
            item.value = newV.checkThreeRatio * newV.checkThree
            item.ratio = newV.checkThreeRatio
          } else {
            item.value = newV.checkFourRatio * newV.checkFour
            item.ratio = newV.checkFourRatio
          }
        })
      }
      deep: true
      immediate: true,
      console.log(this.data)
      this.initEcharts()
    },
  },
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById(this.id));

          var titleArr= [], seriesArr=[];
          let colors=[['#83A1B0', '#424A5F'], ['#FF7A7A', '#D12727'], ['#F1F35B', '#A3A513'], ['#44EE54', '#078C0D']]
          this.data.forEach((item, index) => {
              titleArr.push(
                  {
                      text:item.name,
                      left: index * 25 + 11 +'%',
                      top: '80%',
                      textAlign: 'center',
                      textStyle: {
                          fontWeight: 'normal',
                          fontSize: '14',
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
                              formatter: item.ratio + '%',
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
                      center: [index * 25 + 12 +'%', '55%'],
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
                              value: item.value / item.ratio - item.value,
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
                                      color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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


      let option = {
          // backgroundColor: "#fff",
          title:titleArr,
          series: seriesArr
      }

      myChart.setOption(option)
    }
  },
}
</script>
