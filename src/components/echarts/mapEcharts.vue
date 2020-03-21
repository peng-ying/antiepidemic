<template>
  <!-- 地图分布 -->
  <div id="map" style="width:100%;height: 100%"></div>
</template>

<script>
// import hubei from "../../assets/js/hubei.js";
export default {
  data() {
    return {

    }
  },
  props: ['echartsData'],
  created() {
    this.$nextTick(() => {
      this.initEcharts();
    })
  },
  methods: {
    initEcharts() {
      
    }
  }
}
</script>