t<template>
  <div class="container">
    <div class="top">
      <el-row :gutter="16">
        <el-col :span="4">
          <div class="card"></div>
        </el-col>
        <el-col :span="4">
          <div class="card"></div>
        </el-col>
        <el-col :span="4">
          <div class="card"></div>
        </el-col>
        <el-col :span="4">
          <div class="card"></div>
        </el-col>
        <el-col :span="4">
          <div class="card"></div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-row :gutter="18">
        <el-col :span="8">
          <div class="card">
            <div class="card-top">
              <div class="title">
                <!-- <img src="../../../public/images/圆点.png" alt=""> -->
                <img src="../../assets/imgs/圆点.png" alt="">
                <span>湖北省各市州疫情增长情况</span>
                <img src="../../assets/imgs/分割线.png" class="decoration-line" alt="">
                <span>2020-02-25</span>
              </div>
              <div class="btn">
                <el-button type="primary" round>下载</el-button>
              </div>
            </div>
            <div class="card-content"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <div class="card-top">
              <div class="title">
                <!-- <img src="../../../public/images/圆点.png" alt=""> -->
                <img src="../../assets/imgs/圆点.png" alt="">
                <span>湖北省各市州疫情增长情况</span>
                <img src="../../assets/imgs/分割线.png" class="decoration-line" alt="">
                <span>2020-02-25</span>
              </div>
              <div class="btn">
                <el-button type="primary" round>下载</el-button>
              </div>
            </div>
            <div class="card-content"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <div class="card-top">
              <div class="title">
                <!-- <img src="../../../public/images/圆点.png" alt=""> -->
                <img src="../../assets/imgs/圆点.png" alt="">
                <span>湖北省各市州疫情增长情况</span>
                <img src="../../assets/imgs/分割线.png" class="decoration-line" alt="">
                <span>2020-02-25</span>
              </div>
              <div class="btn">
                <el-button type="primary" round>下载</el-button>
              </div>
            </div>
            <div class="card-content"></div>
          </div>
        </el-col>
      </el-row>
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
  padding: 24px;
  width: 100%;
  height: 100%;
  .top{
    width: 100%;
    height: 342px;
    .el-col{
      width: 20%;
    }
  }
  .el-row{
    height: 100%;
    .el-col{
      height: 100%;
      .card{
        height: 100%;
        background: #FFFFFF;
      }
    }
  }
  .bottom{
    width: 100%;
    height: 542px;
    margin-top: 16px;
    .card-top{
      height: 70px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #EEEFF2;
      line-height: 70px;
      padding: 0 24px 0 24px;

      .title{
        .decoration-line{
          vertical-align: middle;
          margin: 0 10px 0 10px;
        }
      }
      .btn{
        .el-button {
          height: 34px;
          line-height: 0;
        }
      }
    }
  }
}
</style>