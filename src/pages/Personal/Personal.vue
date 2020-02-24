<template>
  <div id="personalContainer">
    <div class="personalHead">
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
    <div class="personalContent">
      <div class="top">
        <div class="image">
          <img src="../../common/images/Personal/yanxuan.png" alt="">
        </div>
        <div class="loginButton">
          <div class="phone" @click="goLoginPhone('/loginphone')">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="email" @click="goLoginEmail('/loginemail')">
            <i class="iconfont icon-duanxin"></i>
            <span>邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
      goLoginPhone(path){
        this.$router.push(path)
      },
      goLoginEmail(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    width 750px
    height 100%
    background #F2F5F4
    box-sizing border-box
    position relative
    .personalHead
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
    .personalContent
      width 750px
      height 1246px
      position absolute
      left 0
      top 88px
      .top
        width 750px
        overflow hidden
        .image
          width 750px
          height 482px
          line-height 482px
          overflow hidden
          img
            display block
            width 268px
            height 90px
            margin 196px auto
        .loginButton
          width 750px
          padding 0 40px
          .phone
            width 670px
            height 94px
            line-height 94px
            text-align center
            color #ffffff
            background #dd1a21
            margin 0 0 32px
            .iconfont
              font-size 45px
              margin 0 16px 0 0
            span
              font-size 28px
          .email
            width 670px
            height 94px
            line-height 94px
            text-align center
            color  #dd1a21
            border 1px solid #dd1a21
            box-sizing border-box
            .iconfont
              font-size 45px
              margin 0 16px 0 0
            span
              font-size 28px
 
</style>
