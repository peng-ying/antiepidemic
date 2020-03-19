<template>
	<div class="largerhome">
		<div class="largerhome-left"></div>
		<div class="largerhome-center"></div>
		<div class="largerhome-right"></div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.largerhome {
  display: flex;
  flex: 1;
  &-left {
	flex:3;
	max-width: 500px;
	height: 100%;
  }
  &-center {
	flex:6;
	height: 100%;
  }
  &-right {
	flex:3;
	height: 100%;
  }
}
</style>