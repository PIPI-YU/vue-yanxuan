<template>
  <div id="footerContainer">
		<div @click="goPath('/home')" class="footerItem">
			<span>首页</span>
		</div>
		<div @click="goPath('/sort')" class="footerItem">
			<span>分类</span>
		</div>
		<div @click="goPath('/worth')" class="footerItem">
			<span>值得买</span>
		</div>
		<div @click="goPath('/cart')" class="footerItem">
			<span>购物车</span>
		</div>
		<div @click="goPath('/personal')" class="footerItem">
			<span>个人</span>
		</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
		methods:{
			goPath(path){
				this.$router.push(path);
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#footerContainer
  display flex
  width 750px
  height 98px
  position fixed
  left 0
  bottom 0
  background #fff
  .footerItem
    width 20%
    height 100%
    text-align center
    line-height 100%
</style>
