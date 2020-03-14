<template>
  <div class="container">
    <img src="../../../src/assets/imgs/配图.png" alt="" class="decoration-img">
    <div class="title">
      <p class="welcome">WELCOME!</p>
      <p class="admin">张三三，欢迎您!</p>
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
.container {
  width: 100%;
  height: 100%;
  background-color: #EFF1F7;
  text-align: center;
  .decoration-img{
    margin-top: 194px;
  }
  .title{
    font-family:PingFangSC;
    margin-top: 81px;
    .welcome{
      font-weight:300;
      font-size:66px;
      color:rgba(94,140,215,1);
      line-height:36px;
      margin: 0;
    }
    .admin{
      font-size: 36px;
      color: #495671;
      /* margin-top: 10px; */
    }
  }
}
</style>