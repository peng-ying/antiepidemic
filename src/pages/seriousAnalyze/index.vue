t<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情重症分析</h1>
        <el-button type="primary">下载</el-button>
      </div>
      <div class="bottom">
        <el-row :gutter="18">
          <el-col :span="12">
            <div class="card">
              <div class="card-title">
              </div>
              <div class="card-content">
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
  
  .bottom{
    width: 100%;
    height: 542px;
    /* margin-top: 16px; */
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
}
</style>