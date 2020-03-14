t<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情分析</h1>
        <el-button type="primary">下载</el-button>
      </div>
      <div class="top">
        <div class="top-title">
          <div class="decoration-line"></div>
          <span>疫情总体数据</span>
        </div>
        <el-row :gutter="16">
          <el-col :span="4">
            <div class="card">
              <iframe src="http://www.baidu.com" scrolling="auto" frameborder="0" class="frame"></iframe>
            </div>
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
          <el-col :span="12">
            <div class="card">
              <div class="card-title">

              </div>
              <div class="card-content">
                <iframe src="https://cn.vuejs.org/" scrolling="auto" frameborder="0" class="frame"></iframe>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="card">
              <div class="card-title">
              </div>
              <div class="card-content">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="bottom">
        <el-row :gutter="18">
          <el-col :span="12">
            <div class="card">
              <div class="card-title">
              </div>
              <div class="card-content">
              </div>
              <!-- <iframe src="https://cn.vuejs.org/" scrolling="auto" frameborder="0" class="frame"></iframe> -->
            </div>
          </el-col>
          <el-col :span="12">
            <div class="card">
              <div class="card-title">
              </div>
              <div class="card-content">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="bottom">
        <el-row :gutter="18">
          <el-col :span="24">
            <div class="card">
              <div class="card-title">
              </div>
              <div class="card-content">
              </div>
              <!-- <iframe src="https://cn.vuejs.org/" scrolling="auto" frameborder="0" class="frame"></iframe> -->
            </div>
          </el-col>
        </el-row>
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
  /* height: 100%; */
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
  .top{
    width: 100%;
    border: 1px solid rgb(215,215,215);
    border-radius: 6px;
    .top-title {
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      border-bottom: 1px solid rgb(215,215,215);
      .decoration-line {
        display: inline-block;
        height: 16px;
        width: 3px;
        background-color: #4087F1;
        margin-bottom: -3px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
        font-family: Microsoft YaHei;
      }
    }
    .el-row {
      height: 342px;
      padding: 30px 50px 30px 50px;
    }
    .el-col{
      width: 20%;
      height: 100%;
      .card{
        height: 100%;
        background: #FFFFFF;
        border: 1px solid rgb(121,121,121);
      }
    }
  }
  
  .bottom{
    width: 100%;
    height: 542px;
    margin-top: 16px;
    .el-row{
      height: 100%;
      .el-col{
        height: 100%;
        .card{
          height: 100%;
          background: #FFFFFF;
          border: 1px solid rgb(215,215,215);
          border-radius: 6px;
        }
        
      }
    }
  }

  .card-title {
    height: 56px;
    border-bottom: 1px solid rgb(215,215,215);
  }

  .frame {
    width: 100%;
    height: 100%;
  }
}
</style>