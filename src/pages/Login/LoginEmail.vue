<template>
  <div id="LoginEmailContainer">
		<div class="LoginEmailHead">
      <div class="header">
        <div class="left">
          <i class="iconfont icon-zhuye" @click="goHome('/home')"></i>
        </div>
        <div class="center">网易严选</div>
        <div class="right">
          <i class="iconfont icon-fangdajing1" @click="goSearch('/search')"></i>
          <i class="iconfont icon-qicheqianlian-" @click="goCart('/cart')"></i>
        </div>
      </div>
    </div>
		<div class="LoginEmailContent">
			<div class="top">
				<img src="../../common/images/Personal/yanxuan.png" alt="">
			</div>
			<div class="center">
				<input v-model="email" name="email" type="text" placeholder="邮箱账号" v-validate="'required|email'">
				<span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
				<input v-model="password" name="password" type="text" placeholder="密码" v-validate="'required|password'">
				<span style="color: red;" v-show="errors.has('password')">{{ errors.first('password') }}</span>
				<div class="in-forget">
					<div class="new">注册账号</div>
					<div class="forget">忘记密码</div>
				</div>
				<div class="loginButton" @click="login">登录</div>
				<div class="other" @click="goPersonal('/personal')">
					<span>其他登录方式 ></span>
				</div>
			</div>
		</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
		data(){
			return{
				email:"",
				password:""
			}
		},
		methods:{
			goHome(path){
				this.$router.push(path)
			},
			goSearch(path){
				this.$router.push(path)
			},
			goCart(path){
				this.$router.push(path)
			},
			goPersonal(path){
				this.$router.push(path)
			},
			async login(){
				const success = await this.$validator.validateAll()
				if(success){
					alert("前端验证成功！")
				}else{
					alert("前端验证失败！")
				}
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#LoginEmailContainer
	width 750px
	height 1334px
	.LoginEmailHead
		width 750px
		height 88px
		position fixed
		left 0
		top 0
		z-index 5
		background #fafafa
		.header
			display flex
			width 750px
			height 88px
			line-height 88px
			text-align center
			padding 0 26px 0 24px
			.left
				float left
				width 46px
				height 88px
				.iconfont
					display block
					font-size 50px
			.center
				float left
				width 150px
				height 88px
				line-height 88px
				margin 0 auto
				text-align center
				font-size 36px
				margin 0 0 0 220px
				color #000
			.right
				display flex
				width 141px
				height 88px
				margin-left 160px
				.iconfont
					display block
					font-size 42px
					margin-right 41px
	.LoginEmailContent
		width 750px
		height 746px
		position absolute
		left 0
		top 88px
		.top
			width 750px
			height 90px
			text-align center
			margin 56px 0 40px
			img
				width 268px
				height 90px
		.center
			width 750px
			padding 114px 40px 0
			input 
				display block
				width 670px
				height 92px
				line-height 92px
				font-size 28px
				border-bottom 1px solid #a4a4a4
				box-sizing border-box
			.in-forget
				width 670px
				height 115px
				line-height 115px
				font-size 28px
				color #666
				.new
					float left
				.forget
					float right
			.loginButton
				width 670px
				height 92px
				line-height 92px
				text-align center
				color rgba(255,255,255,0.5)
				font-size 28px
				background #dd1a21
				border-radius 3px
			.other
				width 670px
				height 38px
				line-height 38px
				text-align center
				color #333
				font-size 28px
				margin-top 70px
 
</style>
