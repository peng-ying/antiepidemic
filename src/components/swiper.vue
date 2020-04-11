<template>
  <div class="swiper-content">
    <!-- <div class="title"> -->
      <div class="close">
        <img src="../assets/imgs/icon-关闭.png" alt="" srcset="" @click="close">
      </div>
    <!-- </div> -->
    <Swiper :options="swiperOption" ref="mySwiper">
      <!-- <SwiperSlide class="swiper-slide" v-for="(item,index) in slide" :key="index"> -->
      <SwiperSlide class="swiper-slide">
        <!-- slide{{item}} -->
        <div style="padding: 0 10% 0 10%">
          <div class="text">
            <div>验码出行方式</div>
          </div>
          <tripMode :id="'trip'" :echartsData="swiperData.tripData"/>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div style="padding: 0 10% 0 10%">
          <div class="text">
            <div>验码城市排行</div>
          </div>
          <testTable :tableInfo="swiperData.cityRankTable" />
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div style="padding: 0 10% 0 10%">
          <div class="text">
            <div>验码卡口排行</div>
          </div>
          <testTable :tableInfo="swiperData.entranceRankTable"/>
        </div>
      </SwiperSlide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 --> 
      <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
    </Swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import tripMode from '@/components/echarts/tripMode';
import testTable from '@/components/table'

export default {
  components: {
    Swiper,
    SwiperSlide,
    tripMode,
    testTable
  },
  props: ['swiperData', 'active'],
  mounted() {
    // 跳转到指定页
   this.swiper.slideTo(this.active, 1000, false)
  //  console.log(this.swiperData)

  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination", //分页器作用对象
          clickable: true //分页器小圆点是否可点击
        },
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        }
      },
      slide: [1, 2, 3, 4],
      title: ''
    };
  },
  directives: {
    swiper: directive
  },
  methods: {
    close() {
      // 关闭弹窗@
      this.$emit('closeSwiper')
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
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
  // position: relative;
  // .title {
  //   padding-top: 60px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   height: 39px;
    
    .close {
      position: absolute;
      top: 60px;
      left: 90%;
      z-index: 2;
      img {
        width: 18px;
        height: 18px;
        margin-right: 25px;
      }
      cursor: pointer;
    }
  // }
  .text {
    margin-top: 60px;
    margin-bottom: 22px;
      // width: calc(100% - 43px);
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
  .swiper-slide {
    height: 100%;
    // width: 80%!important;
    // margin-left: 10%;
    // margin: 22px 10% 0 10%;
    font-size: 50px;
    text-align: center;
    // line-height: 400px;
  }
}
</style>

