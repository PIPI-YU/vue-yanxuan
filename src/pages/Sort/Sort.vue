<template>
  <div id="sortContainer">
    <div class="head">
      <div @click="goSearch('/search')" class="headContent">
        <div class="input">
          <i class="iconfont icon-fangdajing1"></i>
          <span>搜索商品，共21988款好物</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="BScroll">
          <ul>
            <li v-for="(item, index) in sortNavData.categoryL1List" :key="index">
              <router-link :to="`/sort/list/${item.id}`" class="item">
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex"
  import BScroll from "better-scroll";
  export default {
    async mounted(){
      this.$store.dispatch("getSortNavDataAction");
      if(this.sortNavData.categoryL1List){
        this.$router.push(`/sort/list/${this.sortNavData.categoryL1List[0].id}`);
      }

      //better-scroll
      new BScroll(".BScroll",{
        scrollX:true,
        mouseWheel: true,
        click: true,
        taps: true
      });
    },
    methods:{
      goSearch(path){
        this.$router.push(path)
      } 
    },
    computed:{
      ...mapState({
        sortNavData: state => state.sortNavData
        // sortListData: state => state.sortListData
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#sortContainer
  width 750px
  height 1334px
  position relative
  .head
    display flex
    vertical-align middle
    width 750px
    height 88px
    background #fff
    border-bottom 1px solid rgba(0,0,0,.15)
    position fixed
    left 0
    top 0
    z-index 5
    .headContent
      display flex
      width 690px
      height 56px
      line-height 56px
      margin auto
      font-size 28px
      border-radius 8px
      color #666
      background #ededed
      .input
        height 56px
        line-height 56px
        margin 0 auto
        .iconfont
          width 28px
          height 28px
          margin-right 10px
  .content
    display flex
    width 750px
    height 1148px
    position absolute
    left 0
    top 88px
    .left
      width 162px
      height 1148px
      background #fff
      border-right 1px solid rgba(0,0,0,.15)
      .BScroll
        width 162px
        height 1120px
        ul
          width 162px
          padding 40px 0
          li
            list-style none
            width 162px
            height 50px
            line-height 50px
            font-size 28px
            text-align center
            margin-bottom 40px
            .item
              color #333
              width 162px
              height 50px 
          .active
            color #ab2b2b
            border-left 6px solid #ab2b2b
    .right
      width 588px
      height 1148px
 
</style>
