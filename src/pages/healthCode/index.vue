<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情分析</h1>
        <el-button type="primary" @click="toggleFullScreen($event)">大屏展示</el-button>
      </div>
      <div class="content" id="canvasPaintArea">
        <Header />
        <div class="flex-col">
          <div class="flex-row">
            <div class="flex-cell flex-cell-2 flex-left">
              <div class="flex-col flex-left">
                <div class="flex-cell flex-left-2">
                  <SubTitle :subTitle="leftOneTitle"/>
                  <div class="leftOnecontent">
                    <ApplyEcharts />
                  </div>
                </div>
                <div class="flex-cell flex-left-3">
                  <SubTitle :subTitle="leftTwoTitle"/>
                  <div class="leftTwocontent">
                    <SexAndAgeEcharts />
                  </div>
                </div>
                <div class="flex-cell flex-left-4">
                  <SubTitle :subTitle="leftThreeTitle"/>
                  <div class="leftThreecontent">
                    <div class="leftThree-echart">
                      <healthCode />
                    </div>
                    <div class="table-box">
                      <table class="table">
                        <thead class="table-head">
                          <th>序号</th>
                          <th>城市名称</th>
                          <th>申请人数</th>
                          <th>红码</th>
                          <th>黄码</th>
                          <th>绿码</th>
                          <th>通过率</th>
                        </thead>
                        <tbody class="table-body">
                          <tr v-for="item in codeTable" :key="item.index">
                            <td>{{item.index}}</td>
                            <td>{{item.cityName}}</td>
                            <td>{{item.applyPeople}}</td>
                            <td>{{item.red}}</td>
                            <td>{{item.yellow}}</td>
                            <td>{{item.green}}</td>
                            <td>{{item.passRate}}%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-cell flex-cell-4 flex-center">
              <div class="flex-col">
                <div class="flex-cell flex-center-1">
                  <el-row>
                    <el-col :span="8">
                      <div class="grid-content">
                        <p class="sum">申请人数</p>
                        <p class="num">5555555<span>人</span></p>
                        <p class="increase">昨日新增：956人</p>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content">
                        <p class="sum">发放人数</p>
                        <p class="num">5555555<span>人</span></p>
                        <p class="increase">昨日新增：956人</p>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content">
                        <p class="sum">发放人数</p>
                        <p class="num">5555555<span>人</span></p>
                        <p class="increase">昨日新增：956人</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="flex-cell flex-center-5">
                  <mapEcharts />
                </div>
                <!-- <div class="flex-cell flex-center-2">
                  <div class="flex-col">
                    <div class="flex-row">
                      <div class="flex-cell flex-center-5-5">
                        <SubTitle :subTitle="centerOnecontent"/>
                        <div class="centerOnecontent">

                        </div>
                      </div>
                      <div class="flex-cell flex-center-3-3">
                        <SubTitle :subTitle="centerTwocontent"/>
                        <div class="centerTwocontent">

                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="flex-cell flex-cell-2 flex-right">
              <div class="flex-col">
                <div class="flex-cell flex-right-3">
                  <SubTitle :subTitle="rightOneTitle"/>
                  <div class="rightOnecontent">
                    <checkCode />
                  </div>
                </div>
                <div class="flex-cell flex-right-1">
                  <SubTitle :subTitle="rightTwoTitle"/>
                  <div class="rightTwocontent">
                    <tripMode />
                  </div>
                </div>
                <div class="flex-cell flex-right-2">
                  <SubTitle :subTitle="rightThreeTitle"/>
                  <div class="rightThreecontent">
                    <div class="table-box">
                      <table class="table">
                        <thead class="table-head">
                          <th>序号</th>
                          <th>城市排行</th>
                          <th>验码次数</th>
                          <th>卡口数量</th>
                          <th>通过人次</th>
                          <th>通过车次</th>
                          <th>通过率</th>
                        </thead>
                        <tbody class="table-body">
                          <tr v-for="item in cityRankTable" :key="item.index">
                            <td>{{item.index}}</td>
                            <td>{{item.rank}}</td>
                            <td>{{item.checkTimes}}</td>
                            <td>{{item.entrances}}</td>
                            <td>{{item.passPerson}}</td>
                            <td>{{item.passCars}}</td>
                            <td>{{item.passRate}}%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="flex-cell flex-right-2-2">
                  <SubTitle :subTitle="rightFourTitle"/>
                  <div class="rightFourcontent">
                    <div class="table-box">
                      <table class="table">
                        <thead class="table-head">
                          <th>序号</th>
                          <th>卡口名称</th>
                          <th>验码次数</th>
                          <th>城市名称</th>
                          <th>通过人次</th>
                          <th>通过车次</th>
                          <th>通过率</th>
                        </thead>
                        <tbody class="table-body">
                          <tr v-for="item in entranceRankTable" :key="item.index">
                            <td>{{item.index}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.checkTimes}}</td>
                            <td>{{item.city}}</td>
                            <td>{{item.passPerson}}</td>
                            <td>{{item.passCars}}</td>
                            <td>{{item.passRate}}%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header';
import SubTitle from './components/subTitle';
import ApplyEcharts from '@/components/echarts/applyEcharts';
import PeopleEcharts from '@/components/echarts/peopleEcharts';
import SexAndAgeEcharts from '@/components/echarts/sexAndAgeEcharts';
import mapEcharts from '@/components/echarts/mapEcharts';
import Swiper from '@/components/swiper';
import healthCode from '@/components/echarts/codeDistribution';
import checkCode from '@/components/echarts/signInCondition';
import tripMode from '@/components/echarts/tripMode';
export default {
  data() {
    return {
      isFullscreen:true,
      leftOneTitle: '湖北省健康码申请与发放情况',
      leftTwoTitle: '人群性别及年龄分布',
      leftThreeTitle: '健康码发布情况',
      rightOneTitle: '湖北省健康码验码情况',
      rightTwoTitle: '验码出行方式',
      rightThreeTitle: '验码城市排行',
      rightFourTitle: '验码卡口排行',
      centerOnecontent: '打卡情况',
      centerTwocontent: '打卡人群健康情况',
      codeTable: [
        {index: 1, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 2, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 3, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 4, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 5, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 6, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
        {index: 7, cityName: '荆门市', applyPeople: 500, red: 33333, yellow: 200, green: 60, passRate: 10},
      ],
      cityRankTable: [
        {index: 1, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
        {index: 2, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
        {index: 3, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
        {index: 4, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
        {index: 5, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
        {index: 6, rank: 12, checkTimes: 500, entrances: 1000, passPerson: 200, passCars: 60, passRate: 10},
      ],
      entranceRankTable: [
        {index: 1, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
        {index: 2, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
        {index: 3, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
        {index: 4, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
        {index: 5, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
        {index: 6, name: '卡口一', checkTimes: 500, city: '荆门市', passPerson: 200, passCars: 60, passRate: 10},
      ]
    }
  },
  components: {
    Header,
    SubTitle,
    ApplyEcharts,
    PeopleEcharts,
    SexAndAgeEcharts,
    mapEcharts,
    Swiper,
    mapEcharts,
    healthCode,
    checkCode,
    tripMode
  },
  mounted() {
   let _that=this;
   window.onresize = function() {
        if (!_that.checkFull()) {
            //要执行的动作
           _that.isFullscreen=true;
        }
    }
  },
  methods: {
    checkFull() {
      var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
      if (isFull === undefined) {isFull = false;}
      return isFull
    } ,
    FullScreen(el){
      if(this.isFullscreen){//退出全屏
        if(document.exitFullscreen){
          document.exitFullscreen()
        }else if( document.mozCancelFullScreen){
          document.mozCancelFullScreen()
        }else if(document.webkitExitFullscreen){
          //改变平面图在google浏览器上面的样式问题
          // $("#canvasPaintArea").css("position","static").css("width","100%");
          // $(".buildingsFloor").css("width","70%");
          // $(".floor-plan").css("width","78%");
          document.webkitExitFullscreen()
        }else if(!document.msRequestFullscreen){
          document.msExitFullscreen()
        }
      }else{    //进入全屏
        if(el.requestFullscreen){
          el.requestFullscreen()
        }else if(el.mozRequestFullScreen){
          el.mozRequestFullScreen()
        }else if(el.webkitRequestFullscreen){
          //改变平面图在google浏览器上面的样式问题
          // $("#canvasPaintArea").css("position","absolute").css("width","94%");
          // $(".buildingsFloor").css("width","98%");
          // $(".floor-plan").css("width","90%");
          el.webkitRequestFullscreen();
        }else if(el.msRequestFullscreen){
          this.isFullscreen=true;
          el.msRequestFullscreen()
        }
      }
    },
    toggleFullScreen(e){
        this.isFullscreen=!this.isFullscreen;
        this.FullScreen(document.getElementById("canvasPaintArea"));
    },
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.less');
.container{
  background-color: #EEF1F7;
  padding: 24px 24px 0 24px;
  width: 100%;
  height: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    height: 75px;
    line-height: 50px;
    h1 {
      display: inline;
      font-size: 24px;
    }
    .el-button {
      height: 30px;
      margin-top: 30px;
      margin-right: 30px;
      line-height: 0;
    }
  }

  .content {
    width: 100%;
    height: 900px;
    // max-height: 1080px;
    background-image: url(../../assets/imgs/bg.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    overflow: hidden;
    .top {
      width: 100%;
      height: 6.5%;
      .decoration {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        // background-image: url(../../assets/imgs/装饰线.png);
        // background-repeat: no-repeat;
        // background-position: center center;
        .decoration-line {
          width: 100%;
          margin-top: 2%;
        }
        .top-title {
          width: 35%;
          height: 100%;
          background-image: url(../../assets/imgs/title-bg.png);
          background-repeat: no-repeat;
          background-position: center 0;
          background-size: 140%;
          position: absolute;
          top: 0;
          left: 32.5%;
          color: #FFFFFF;
          p {
            width: 100%;
            height: 100%;
          }
        }
      }

    }

    .flex-col {
      height: 100%;
      display: flex;
      flex-direction: column;
      .flex-row {
        flex: 1;
        display: flex;
        height: 100%;
        .flex-cell-2 {
          flex: 0.26;
        }
        .flex-cell-4 {
          flex: 0.48;
        }
        .flex-left {
          margin-left: 20px;
        }
        .flex-right {
          margin-right: 20px;
        }
      }
      .flex-cell {
        .leftOnecontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
        .leftTwocontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
        .leftThreecontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
          .leftThree-echart {
            height: 35%;
            margin: 10px 0 10px 0;
          }
        }
        .rightOnecontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
        .rightTwocontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
          padding-top: 10px;
        }
        .rightThreecontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
        .rightFourcontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
      }
    }
    .flex-left {
      flex: 1;
      display: flex;
      height: 100%;
      .flex-left-2 {
        flex: 0.207;
        margin-top: 4px;
      }
      .flex-left-3 {
        flex: 0.293;
        margin-top: 16px;
      }
      .flex-left-4 {
        flex: 0.339;
        margin-top: 16px;
      }
    }
    .flex-center {
      .flex-center-1 {
        // flex: 0.181;
        flex: 0.190;
        .el-row {
          width: 80%;
          height: 100%;
          margin-left: 10%;
          margin-top: 36px;
        }
        .grid-content {
          // color: #ffffff;
          // border: 1px solid white;
          p {
            margin: 0;
          }
          .sum {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:36px;
          }
          .num {
            font-size:32px;
            font-family:DINNextW1G;
            font-weight:normal;
            color:rgba(255,255,255,1);
            line-height:48px;
            span {
              font-size: 14px;
            }
          }
          .increase {
            font-size:14px;
            font-family:SourceHanSansCN;
            font-weight:400;
            color:rgba(128,197,255,1);
            line-height: 24px;
          }
        }
      }
      .flex-center-5 {
        // flex: 0.482;
        flex: 0.6;
      }
      .flex-center-2 {
        flex: 0.235;
      }
    }
    .flex-center {
      .flex-center-2 {
        margin: 0 24px;
      }
      .flex-center-5-5 {
        flex: 0.548;
        margin-right: 24px;
      }
      .flex-center-3-3 {
        flex: 0.37;
      }
    }
    .flex-right {
      .flex-right-3 {
        flex: 0.283;
        margin-top: 4px;
      }
      .flex-right-1 {
        flex: 0.143;
        margin-top: 16px;
      }
      .flex-right-2 {
        flex: 0.202;
        margin-top: 16px;
      }
      .flex-right-2-2 {
        flex: 0.206;
        margin-top: 16px;
      }
    }
  }

  .table-box {
    height: 140px;
    width: 100%;
    table thead, table tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
    }
    .table {
      font-family:SourceHanSansCN;
      font-size: 14px;
      border-spacing: 0px;
      width: 100%;
      thead th, tbody td {
        height: 30px;
        width: 67px;
      }
      thead th:first-child, tbody td:first-child {
        width: 45px;
      }
      .table-head {
        background:linear-gradient(92deg,rgba(0,138,255,0.5) 0%,rgba(0,138,255,0) 100%);
        th {
          height: 34px;
          color: #FFFFFF;
          opacity:0.7;
        }
      }
      .table-body {
        width: 100%;
        height: 110px;
        text-align: center;
        display: block;
        overflow-y: scroll;
        tr {
          color: #80C5FF;
          opacity:0.7;
        }
      }
      .table-body::-webkit-scrollbar {
        width: 0;
      }
      // .table-body::-webkit-scrollbar-thumb {
      //   width: 0;
      // }
      // .table-body::-webkit-scrollbar-track {
      //   width: 0;
      // }
    }
  }

}
</style>
