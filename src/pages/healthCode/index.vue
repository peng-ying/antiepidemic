<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情分析</h1>
        <el-button type="primary">大屏展示</el-button>
      </div>
      <div class="content">
        <!-- <el-row :gutter="18">
          <el-col :span="7">
          </el-col>
          <el-col :span="10">
          </el-col>
          <el-col :span="7">
          </el-col>
        </el-row> -->
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
  }
}
</style>