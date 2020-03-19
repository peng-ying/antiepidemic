<template>
  <div class="codeheader">
    <div class="center">
      <span>湖北省健康码<i>（更新时间：2020年3月12日）</i></span>
    </div>
    <!-- <div></div>
    <div></div>
    <div></div> -->
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.codeheader {
  height: 70px;
  width: 100%;
  background-image: url(../../../assets/imgs/装饰线.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  flex: 1;
  .center {
    background-image: url(../../../assets/imgs/title-bg.png);
    background-repeat: no-repeat;
    background-position: center top;
    flex: 0.34;
    line-height: 70px;
    text-align: center;
    span {
      font-family: SourceHanSansCN-Bold;
      color: #FFFFFF;
      font-size: 24px;
    }
    i {
      font-size: 14px;
    }
  }
}
</style>
