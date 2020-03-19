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
              <div class="aplly">
                <p class="card-title">湖北省健康码申请与发放情况</p>
                <img src="../../assets/imgs/decoration-bg.png" alt="" class="card-decoration">
              </div>
            </div>
            <div class="flex-cell flex-cell-4">
            </div>
            <div class="flex-cell flex-cell-2 flex-right">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  data() {
    return {
      isFullscreen:true
    }
  },
  components: {
    Header,
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
    }
  }
}
</style>
