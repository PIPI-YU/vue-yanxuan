<template>
  <div id="footerContainer">
		<div @click="goPath('/home')" class="footerItem">
			<div class="icon">
				<i class="iconfont icon-zhuye"></i>
				<div class="text">首页</div>
			</div>
		</div>
		<div @click="goPath('/sort')" class="footerItem">
			<div class="icon">
				<i class="iconfont icon-guizi"></i>
				<div class="text">分类</div>
			</div>
		</div>
		<div @click="goPath('/worth')" class="footerItem">
			<div class="icon">
				<i class="iconfont icon-zhidemai2"></i>
				<div class="text">值得买</div>
			</div>
		</div>
		<div @click="goPath('/cart')" class="footerItem">
			<div class="icon">
				<i class="iconfont icon-qicheqianlian-"></i>
				<div class="text">购物车</div>
			</div>
		</div>
		<div @click="goPath('/personal')" class="footerItem">
			<div class="icon">
				<i class="iconfont icon-profile"></i>
				<div class="text">个人</div>
			</div>
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
	color #666
	.icon
		height 64px
		font-size 40px
		.iconfont
			width 40px
			height 40px
		.text 
			height 24px
			line-height 24px
			font-size 24px
			margin 20px 0 0
</style>
