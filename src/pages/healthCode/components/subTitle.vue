<template>
  <div class="subTitle">
    <div class="text">{{subTitle}}</div>
    <div class="info" v-show="showInfo" @click="showDetail">详情</div>
    <div class="subtitlebg"></div>
  </div>
</template>
<script>
export default {
  // props: ['subTitle', 'showInfo']
  props: {
    subTitle: {
      type: String
    },
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showDetail() {
      this.$emit('showDetail')
    }
  },
}
</script>
<style lang="less" scoped>
.subTitle {
  .text {
    font-family: SourceHanSansCN-Bold;
    color: #FFFFFF;
    font-size: 18px;
    display: inline-block;
  }
  .info {
    display: inline-block;
    width:52px;
    height:26px;
    background:rgba(0,138,255,0.1);
    border:1px solid rgba(0,138,255,1);
    border-radius:4px;
    color:rgba(128,197,255,1);
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    font-family: SourceHanSansCN-Regular;
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
