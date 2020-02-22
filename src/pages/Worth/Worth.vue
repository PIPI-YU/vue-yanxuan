<template>
  <div id="worthContainer">
      <div class="head">
        <div class="header">
          <div class="left">
            <i class="iconfont"></i>
          </div>
          <div class="center">值得买</div>
          <div class="right">
            <i class="iconfont"></i>
            <i class="iconfont"></i>
          </div>
        </div>
      </div>
      <div class="nav"></div>
      <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex"
  export default {
    async mounted(){
      this.$store.dispatch("getWorthNavDataAction");
      this.$store.dispatch("getWorthPoolDataAction");
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
  height 5000px
  background #eee
  position absolute
  left 0
  top 0
  .head
    width 750px
    height 100px
    position fixed
    left 0
    right 0
    background pink
    .header
      width 750px
      height 100px
      line-height 100px
      padding 0 13px 0 12px
 
</style>
