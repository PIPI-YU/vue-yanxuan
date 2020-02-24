<template>
  <div id="LoginPhoneContainer">
		<div class="LoginPhoneHead">
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
		<div class="LoginPhoneContent">
			<div class="top">
				<img src="../../common/images/Personal/yanxuan.png" alt="">
			</div>
			<div class="center">
				<input v-model="phone" name="phone" type="tel" maxlength="11" placeholder="请输入手机号" v-validate="'required|phone'">
				<span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
				<div class="getCode">
					<input v-model="code" name="code" type="text" placeholder="请输入短信验证码" v-validate="'required|code'">
					<span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
					<div class="Code" @click="getCode">获取验证码</div>
				</div>
				<div class="in-forget">
					<div class="new">遇到问题？</div>
					<div class="forget">使用密码验证登录</div>
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
				phone:"",  //手机号
				code:""
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
			getCode(){    //获取验证码
				console.log("获取验证码...");
			},
			async login(){
				const success = await this.$validator.validateAll()
				if(success){
					alert("前端验证成功！")
				}else{
					alert("前端验证失败！")
				}
			}
		},
		computed:{
			rightPhone(){
				return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#LoginPhoneContainer
	width 750px
	height 1334px
	.LoginPhoneHead
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
	.LoginPhoneContent
		width 750px
		height 746px
		position absolute
		left 0
		top 88px
		.top
			width 750px
			height 90px
			text-align center
			margin 56px 0 0
			img
				width 268px
				height 90px
		.center
			width 750px
			padding 60px 40px 0
			input 
				display block
				width 670px
				height 92px
				line-height 92px
				font-size 28px
				border-bottom 1px solid #a4a4a4
				box-sizing border-box
			.getCode
				width 670px
				height 92px
				.Code
					width 168px
					height 54px
					line-height 54px
					text-align center
					color #333
					box-sizing border-box
					border 1px solid #333
					font-size 28px
					position absolute
					right 40px
					top 320px
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
				color rgba(255,255,255,1)
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
				margin-top 200px
</style>
