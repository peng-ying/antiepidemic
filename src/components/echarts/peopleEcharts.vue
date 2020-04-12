<template>
  <div class="peopleimg">
    <div class="peoplecontent" :id="id" style="width: 100%;height: 80%;"></div>
    <div class="man"></div>
    <div class="woman"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        myData:[],
        percent: [],
        femaleValue: [],
        maleValue: [],
    }
  },
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    })
  },
  props: ['id', 'echartsData'],
  watch: {
    echartsData: function(newV, oldV) {
      this.myData = []
      this.percent = []
      this.maleValue = []
      this.femaleValue =[]
      let maleArray = newV.filter(item => {
        return item.sex === '男'
      })
      let femaleArray = newV.filter(item => {
        return item.sex === '女'
      })
      maleArray.map(item => {
        let age = item.ageRange, name = item.ageName
        let str = `${name}(${age})`
        this.myData.push(str)
        item.applyNum ? this.maleValue.push(item.applyNum) : this.maleValue.push(item.grantNum)
      })
      femaleArray.map(item => {
        item.applyNum ? this.femaleValue.push(item.applyNum) : this.femaleValue.push(item.grantNum)
      })
      this.maleValue.map((v, i) => {
        this.percent.push((v / this.femaleValue[i]).toFixed(1))
      })
      this.initEcharts()
      // console.log(newV)
    }
  },
  methods: {
    initEcharts() {
      // debugger
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.id));

      myChart.setOption({
        // legend:{data:['男','女'],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     selectedMode:false,
        // },
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
            top: 40,
            bottom: 0,
            containLabel: true,
            width: '49%'
        }, {
            show: false,
            left: '50.5%',
            top: 40,
            bottom: 0,
            width: '0%'
        }, {
            show: false,
            right: '5%',
            top: 40,
            bottom: 0,
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
              padding: [0,400,0,0]
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
            data: this.percent
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

      
      setTimeout(function (){        
        window.addEventListener('resize', function () {
            myChart.resize();
        })
      }, 50)
    }
  }
}
</script>

<style lang="less">
.peopleimg {
  width: 100%;
  // height: calc(100% - 50px);
  height: 100%;
  position: relative;
  .peoplecontent {
    width: 100%;
    height: 100%;
    position: absolute;
  }
	.man{
		background: url(../../assets/imgs/男.png)no-repeat;
		width: 35px;
		height: 90px;
		position: absolute;
		left: 224px;
		top: 26px;
	}
	.woman{
		background: url(../../assets/imgs/女.png)no-repeat;
		width: 40px;
		height: 90px;
		position: absolute;
		right: 145px;
		top: 26px;
	}
}
</style>
