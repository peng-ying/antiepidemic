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
                    <PeopleEcharts />
                  </div>
                </div>
                <div class="flex-cell flex-left-4">
                  <SubTitle :subTitle="leftThreeTitle"/>
                  <div class="leftThreecontent">

                  </div>
                </div>
              </div>
            </div>
            <div class="flex-cell flex-cell-4 flex-center">
              <div class="flex-col">
                <div class="flex-cell flex-center-1"></div>
                <div class="flex-cell flex-center-5">
                  <mapEcharts />
                </div>
                <div class="flex-cell flex-center-2">
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
                </div>
              </div>
            </div>
            <div class="flex-cell flex-cell-2 flex-right">
              <div class="flex-col">
                <div class="flex-cell flex-right-3">
                  <SubTitle :subTitle="rightOneTitle"/>
                  <div class="rightOnecontent">

                  </div>
                </div>
                <div class="flex-cell flex-right-1">
                  <SubTitle :subTitle="rightTwoTitle"/>
                  <div class="rightTwocontent">

                  </div>
                </div>
                <div class="flex-cell flex-right-2">
                  <SubTitle :subTitle="rightThreeTitle"/>
                  <div class="rightThreecontent">

                  </div>
                </div>
                <div class="flex-cell flex-right-2-2">
                  <SubTitle :subTitle="rightFourTitle"/>
                  <div class="rightFourcontent">

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
import mapEcharts from '@/components/echarts/mapEcharts';
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
    }
  },
  components: {
    Header,
    SubTitle,
    ApplyEcharts,
    PeopleEcharts,
    mapEcharts
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
        }
        .rightOnecontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
        }
        .rightTwocontent {
          background:linear-gradient(0deg,rgba(0,138,255,.1) 0%,rgba(0,138,255,0) 100%);
          height: calc(100% - 28px);
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
        flex: 0.081;
      }
      .flex-center-5 {
        flex: 0.482;
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
}
</style>
