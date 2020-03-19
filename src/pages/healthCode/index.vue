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
