t<template>
  <div class="container">
    <div style="background: #FFFFFF; padding: 0 24px 0 24px; height: 100%;">
      <div class="title">
        <h1>湖北省疫情分析</h1>
        <el-button type="primary">下载</el-button>
      </div>
      <!-- <div class="top">
        <div class="top-title">
          <div class="decoration-line"></div>
          <div style="display: inline-block;">
            <label for="">请选择
              <select class="select" name="area">
                <option value="hubei">湖北省</option>
                <option value="hunan">湖南省</option>
              </select>
            </label>
          </div>
        </div>
      </div> -->
      <div class="bottom">
        <el-row :gutter="18">
          <el-col :span="8">
            <div class="card">
              <div class="time">
                <div class="decoration-line"></div>
                <span>高峰日预测</span>
              </div>
              <div class="Peakf-content">
                <div class="content">
                  <!-- <div>预计高峰日期</div>
                  <div>2020年3月13日</div>
                  <div>距今天还有13天</div> -->
                </div>
                <div class="content"></div>
              </div>              
            </div>
          </el-col>
          <el-col :span="16">
            <div class="card">
              <!-- <div class="time">
                <div class="decoration-line"></div>
                <span>近15日疫情预测</span>
              </div> -->
              <div></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="last">
        <el-row>
          <el-col :span="24">
            <div class="card">
              <!-- <div class="time">
                <div class="decoration-line"></div>
                <span>武汉市疫情高峰预测情况</span>
              </div>               -->
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
      form: {}
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

  .top{
    width: 100%;
    border: 1px solid rgb(215,215,215);
    border-radius: 6px;
    .top-title {
      height: 60px;
      line-height: 60px;
      padding-left: 30px;
      .decoration-line {
        display: inline-block;
        height: 16px;
        width: 6px;
        background-color: #4087F1;
        margin-bottom: -3px;
        margin-right: 5px;
      }
      .el-form-item {
          margin-bottom: 0;
          .el-form-item__content {
            margin-top: 5px;
          }
      }

      .select {
        width: 350px;
        height: 24px;
        margin-left: 24px;
      }
    }
  }
  
  .bottom{
    width: 100%;
    height: 542px;
    margin-top: 20px;
    font-size: 14px;
    .el-row{
      height: 100%;
      .el-col{
        height: 100%;
        .card{
          height: 100%;
          background: #FFFFFF;
          border: 1px solid rgb(215,215,215);
          border-radius: 6px;
          .time {
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #d7d7d7;
            .decoration-line {
              display: inline-block;
              height: 16px;
              width: 6px;
              background-color: #4087F1;
              margin-bottom: -3px;
              margin-right: 5px;
              margin-left: 30px;
            }
          }
          .Peakf-content {
            .content {
              width: 80%;
              margin: 0 10%;
              height: 150px;
              border-radius: 6px;
              border: 1px solid #d7d7d7;
              text-align: center;
            }
            .content:nth-child(1) {
              margin-top: 10%;
              margin-bottom: 10%;
            }
          }
        }
      }
    }
  }

  .last {
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
          .time {
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #d7d7d7;
            .decoration-line {
              display: inline-block;
              height: 16px;
              width: 6px;
              background-color: #4087F1;
              margin-bottom: -3px;
              margin-right: 5px;
              margin-left: 30px;
            }
          }          
        }
      }
    }
  }
}
</style>