<template>
  <div class="swiper-content">
    <div class="title">
      <div class="text">
        <div>验码城市排行</div>
      </div>
      <div class="close">
        <img src="../assets/imgs/icon-关闭.png" alt="" srcset="" @click="close">
      </div>
    </div>
    <Swiper :options="swiperOption">
      <SwiperSlide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        slide{{item}}
      </SwiperSlide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['slide'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination", //分页器作用对象
          clickable: true //分页器小圆点是否可点击
        },
        navigation: {
          prevtButton: true,
          nextButton: true
        }
      },
      // slide: [1, 2, 3, 4]
    };
  },
  directives: {
    swiper: directive
  },
  methods: {
    close() {
      // 关闭弹窗@
      this.$emit('closeSwiper')
    }
  },
};
</script>

<style lang="less" scoped>
.swiper-content {
  background: url('../assets/imgs/弹窗.png');
  background-repeat: no-repeat;
  background-position: center center;
  height: 520px;
  max-width: 805px;
  .title {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 39px;
    .text {
      width: calc(100% - 43px);
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        background: linear-gradient(
                    to right,
                    rgba(3, 56, 11, .2) 0%,
                    // rgba(0, 0, 0, 0) 10%,
                    // rgba(255, 255, 255, 0.3) 20%,
                    // rgba(255, 255, 255, 0.4) 30%,
                    // rgba(255, 255, 255, 0.5) 40%,
                    rgba(14, 46, 83, 1) 50%,
                    // rgba(255, 255, 255, 0.5) 60%,
                    // rgba(255, 255, 255, 0.4) 70%,
                    // rgba(255, 255, 255, 0.3) 80%,
                    // rgba(0, 0, 0, 0) 90%,
                    rgba(3,56, 11, .1) 100%);
        // background: line-gradient(#008AFF 24%, #03356D 100%);
        width: 271px;
        height: 39px;
        line-height: 39px;
        text-align: center;
        font-family: SourceHanSansCN-Bold;
        color: #FFFFFF;
        font-size: 18px;
      }
    }
    .close {
      img {
        width: 18px;
        height: 18px;
        margin-right: 25px;
      }
    }
  }
  .swiper-slide {
    height: 400px;
    font-size: 50px;
    text-align: center;
    line-height: 400px;
  }
}
</style>
