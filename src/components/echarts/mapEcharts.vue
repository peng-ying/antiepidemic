<template>
  <!-- 地图分布 -->
  <div :id="id" style="width:100%;height: 100%"></div>
</template>

<script>
// import hubei from "../../assets/js/hubei.js";
import geoJson from "../../assets/json/hubei.json";
export default {
  data() {
    return {
      mapname: 'hubei',
    };
  },
  props: ['id', "echartsData"],
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    });
  },
  watch: {
    echartsData: function(newV, oldV) {
      console.log(newV)
      this.initEcharts()
    }
  },
  methods: {
    initEcharts() {
      // this.$axios.get("../static/hunan.json").then(res => {
      //   console.log(res)
      // })
      // debugger
      // console.log(this.mapname, geoJson)
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.hideLoading();

      this.$echarts.registerMap(this.mapname, geoJson);
      myChart.setOption({
          geo: {
            map: 'hubei',
            aspectScale: 1,
            zoom: 1.2,
          },
          //  backgroundColor: "rgb(230, 238, 243)",
          color: ["white"],
          legend: {
            orient: "vertical",
            left: "left",
            textStyle: {
              fontSize: 20,
              color: "black" // 图例文字颜色
            }
            //data: ['地市']
            // 图例位置
          },
          visualMap: {
            min: 0,
            max: 10000,
            // left: "right",
            right: '5%',
            top: "top",
            text: ["申请人数"],
            // 文本，默认为数值文本
            //calculable: true,
            color: ['#ffffff', '#ffffff'],
            //图例颜色
            pieces: [
              {
                min: 10000,
                max: 90000,
                label: ">50000",
                color: "#00355C"
              },
              {
                min: 5000,
                max: 9999,
                label: "5000-9999",
                color: "#063A68"
              },
              {
                min: 1000,
                max: 4999,
                label: "500-4999",
                color: "#074980"
              },
              {
                min: 0,
                max: 1000,
                label: "0-1000",
                color: "#095597"
              }
            ],
            orient: "vertical",
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],
            textStyle: {
              color: "#80C5FF"
            }
          },
          tooltip: {
            trigger: "item",
            formatter: function(params, ticket, callback) {
              // console.log(params);
              var tipHtml = "";
              var dataList = params.data.dataList;
              var str = "";
              // for(let i in dataList) {
                tipHtml = `
                  <span style="fontSize: 15px;"><span style="color: #FE7978">红码</span>人数: ${dataList[0].value}人</span><br />
                  <span style="fontSize: 15px;"><span style="color: #EFF159">黄码</span>人数: ${dataList[1].value}人</span><br />
                  <span style="fontSize: 15px;"><span style="color: #41EF52">绿码</span>人数: ${dataList[2].value}人</span><br />
                  <span style="fontSize: 15px;"><span style="color: #AFAFAF">灰码</span>人数: ${dataList[3].value}人</span><br />
                `;
              // }
              str = `
                <div style="padding:10px 10px 10px 20px;height:auto;fontSize: 15px;width:237px;border-radius:5px;background: #072D4E">
                    <span style="fontSize: 15px;"><span style="color: #80C5FF">城市名称：</span>${params.data.name}</span><br />
                    ${tipHtml}
                </div>
                `
              // <span style="fontSize: 15px;"><span style="color: #80C5FF">申请人数 :</span> ${params.data.value}</span><br />
              return str;
            }
          },
          series: [
            {
              //  name: '地市',
              type: "map",
              mapType: this.mapname,
              showLegendSymbol: false,
              zoom: 1.2,
              aspectScale: 1,
              layoutCenter: ['30%', '30%'],
              scale: 1,
              label: {
                normal: {
                  show: true,
                  color: "#ffffff"
                },
                emphasis: {
                  textStyle: {
                    color: "#fff"
                  }
                }
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#4FAE4F"
                }
              },
              itemStyle: {
                borderColor: "#0E7EEA",
                borderWidth: "2",
                shadowColor: "#0063BF",
                shadowBlur: 10,
                shadowOffsetX: 3,
                shadowOffsetY: -2
              },
              data: this.echartsData

              // data: [
              //   {
              //     name: "鄂州市",
              //     value: 1391,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "恩施土家族苗族自治州",
              //     value: 252,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "黄冈市",
              //     value: 2905,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "黄石市",
              //     value: 1014,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "荆门市",
              //     value: 925,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "荆州市",
              //     value: 1579,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "潜江市",
              //     value: 198,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "神农架林区",
              //     value: 11,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "十堰市",
              //     value: 672,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "随州市",
              //     value: 1307,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "天门市",
              //     value: 496,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "武汉市",
              //     value: 49122,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "仙桃市",
              //     value: 575,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "咸宁市",
              //     value: 836,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "襄阳市",
              //     value: 1175,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "孝感市",
              //     value: 3518,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   },
              //   {
              //     name: "宜昌市",
              //     value: 931,
              //     grey: 50,
              //     red: 60,
              //     yellow: 70,
              //     green: 80
              //   }
              // ]
              //animationDurationUpdate: 1000,
              //animationEasingUpdate: 'quinticInOut'
            }
          ]
        });

        setTimeout(function (){        
          window.addEventListener('resize', function () {
              myChart.resize();
          })
        }, 50)
    }
  }
};
</script>
