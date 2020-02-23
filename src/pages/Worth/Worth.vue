<template>
  <div id="worthContainer"  v-if="worthPoolData">
      <div class="head">
        <div class="header">
          <div class="left">
            <i class="iconfont icon-zhuye"></i>
          </div>
          <div class="center">值得买</div>
          <div class="right">
            <i class="iconfont icon-fangdajing1"></i>
            <i class="iconfont icon-qicheqianlian-"></i>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="navTop">
          <img class="worth" src="../../common/images/Worth/worth.png" alt="">
          <div class="navText">严选好物 用心生活</div>
        </div>
        <div class="navBottom">
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="worthNavData.navList">
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[0].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[0].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[0].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[1].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[1].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[1].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[2].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[2].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[2].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[3].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[3].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[3].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[4].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[4].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[4].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[5].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[5].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[5].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[6].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[6].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[6].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[7].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[7].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[7].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[8].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[8].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[8].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[9].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[9].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[9].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[10].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[10].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[10].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[11].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[11].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[11].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[12].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[12].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[12].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[13].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[13].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[13].viceTitle}}</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideItem">
                  <img :src="worthNavData.navList[14].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[14].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[14].viceTitle}}</div>
                </div>
                <div class="slideItem">
                  <img :src="worthNavData.navList[15].picUrl" alt="">
                  <div class="itemText1">{{worthNavData.navList[15].mainTitle}}</div>
                  <div class="itemText2">{{worthNavData.navList[15].viceTitle}}</div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="worth-content" v-for="(itemPage, index) in worthPoolData" :key="index">
        <div class="page" v-if="itemPage.ad">
          <div class="ad"><img class="ad-image" :src="itemPage.ad.picUrl" alt=""></div>
          <div class="topics">
            <div class="topic" v-for="(item, index) in itemPage.topics" :key="index">
              <img class="image" :src="item.picUrl" alt="">
              <div class="topic-title">{{item.title}}</div>
              <div class="topic-bottom">
                <div class="bottomLeft">
                  <img class="avatar" :src="item.avatar" alt="">
                  <div class="topic-nickname">{{item.nickname}}</div>
                </div>
                <div class="bottomRight">90k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"
  import {mapState} from "vuex"
  export default {
    async mounted(){
      this.$store.dispatch("getWorthNavDataAction");
      this.$store.dispatch("getWorthPoolDataAction");

      //swiper
      new Swiper(".swiper-container", {
        slidesPerView: 'auto',
        loopedSlides: 4,
        //分页器
        pagination: {
          el: ".swiper-pagination",
          type:'bullets'
        }
      })
    },
    computed:{
      ...mapState({
        worthNavData: state => state.worthNavData,
        worthPoolData: state => state.worthPoolData
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#worthContainer
  width 750px
  height 100%
  background #eee
  box-sizing border-box
  .head
    width 750px
    height 100px
    position fixed
    left 0
    top 0
    z-index 5
    background #fff
    .header
      display flex
      width 750px
      height 100px
      line-height 100px
      text-align center
      padding 0 26px 0 24px
      .left
        float left
        width 46px
        height 100px
        .iconfont
          display block
          font-size 50px
      .center
        float left
        width 150px
        height 100px
        line-height 100px
        margin 0 auto
        text-align center
        font-size 36px
        margin 0 0 0 220px
        color #000
      .right
        display flex
        width 141px
        height 100px
        margin-left 160px
        .iconfont
          display block
          font-size 42px
          margin-right 41px
  .nav
    width 750px
    height 685px
    margin-bottom 45px
    position absolute
    left 0
    top 100px
    background-image url("../../common/images/Worth/background.png")
    background-repeat norepeat
    background-size 750px 685px
    background-position 0 0
    .navTop
      display flex
      width 750px
      height 140px
      .worth
        width 130px
        height 65px
        position absolute
        left 13px
        top 63px
      .navText
        font-size 30px
        position absolute
        color #fff
        left 150px
        top 88px
    .navBottom
      width 710px
      height 540px
      margin 0 20px
      background #fff
      border-radius 24px
      .swiper-container
        width 710px
        height 540px
        background #fff
        border-radius 24px
        .swiper-wrapper
          width 710px
          height 540px
          .swiper-slide
            overflow hidden
            width 177.5px
            height 540px
            .slideItem
              width 168px
              height 201px
              margin 45px 4.75px 0
              box-sizing border-box
              img
                width 120px
                height 120px
                margin 0 24px
              .itemText1
                widows 168px
                height 40px
                text-align center
                font-weight bold
                font-size 28px
                color #333
              .itemText2
                width 168px
                height 30px
                text-align center
                font-size 24px
                margin 2px 0 0
                color #999
  .worth-content
    width 750px
    background #eee
    box-sizing border-box
    position absolute
    left 0
    top 810px
    .page
      width 750px
      margin 0 20px
      box-sizing border-box
      columns 2
      column-gap 20px
      .ad
        width 345px
        height 192px
        border-radius 24px
        margin-right 0
        font-size 0
        .ad-image
          display block
          width 345px
          height 192px
          border-radius 24px
          margin-right 0
      .topics
        width 345px
        border-radius 24px
        .topic
          width 345px
          background #fff
          border-radius 24px
          margin-bottom 20px
          overflow hidden
          break-inside avoid
          .image
            width 345px
            border-radius 24px 24px 0 0
          .topic-title
            width 345px
            height 90px
            line-height 45px
            color #333
            font-size 28px
            padding 18px 16px 0
          .topic-bottom
            width 345px
            height 50px
            line-height 50px
            padding 17px 16px 24px
            .bottomLeft
              float left
              display flex
              height 48px
              .avatar
                width 48px
                height 48px
                border-radius 24px
              .topic-nickname
                height 48px
                line-height 48px
                color #7f7f7f
                font-size 24px
                margin 0 0 0 8px
            .bottomRight
              float right
              height 32px
              line-height 32px
              color #7f7f7f
              font-size 24px
              margin 0 0 0 4px

 
</style>
