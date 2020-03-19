<template>
  <div class="subTitle">
    <div class="text">{{subTitle}}</div>
    <div class="subtitlebg"></div>
  </div>
</template>
<script>
export default {
  props: ['subTitle']
}
</script>
<style lang="less" scoped>
.subTitle {
  .text {
    font-family: SourceHanSansCN-Bold;
    color: #FFFFFF;
    font-size: 18px;
  }
  .subtitlebg {
    height: 10px;
    background: url(../../../assets/imgs/decoration-bg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
}
</style>
