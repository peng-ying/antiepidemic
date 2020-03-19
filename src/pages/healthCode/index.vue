<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情分析</h1>
        <el-button type="primary">大屏展示</el-button>
      </div>
      <div class="content">
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
  export default {
  data() {
    return {

    }
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
