<template>
  <div id="listContainer">
      <div class="content" v-for="(item, index) in sortListData" :key="index">
          <!-- <div v-if="item.id == id"> -->
            <div class="top">
              <img :src="sortNavData.categoryL1List[index].bannerUrl" alt="">
            </div>
            <div class="bottom">
              <ul>
                <li v-for="(item, index) in sortListData.categoryList" :key="index">
                  <div class="image">
                    <img :src="sortListData.categoryList[index].wapBannerUrl" alt="">
                  </div>
                  <div class="text">{{sortListData.categoryList[index].name}}</div>
                </li>
              </ul>
            </div>
          <!-- </div> -->
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex"
  export default {
    async mounted(){
      this.$store.dispatch("getSortNavDataAction");
      this.$store.dispatch("getSortListDataAction");
    },
    computed:{
      ...mapState({
        sortNavData: state => state.sortNavData,
        sortListData: state => state.sortListData
      }),
      ...mapState({
        id:state => state.id
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#listContainer
  width 588px
  height 1148px
  padding 30px 30px 21px
  overflow hidden
  position relative
  .content
    flex-direction column
    width 528px
    position absolute
    left 30px
    top 30px
    .top
      width 528px
      height 192px
      margin-bottom 32px
      img 
        width 100%
        height 100%
    .bottom
      width 528px
      ul
        display flex
        flex-wrap wrap
        width 528px
        box-sizing border-box
        li
          width 144px
          height 216px
          margin-right 32px
          .image
            width 144px
            height 144px
            img 
              width 144px
              height 144px
              background #fff
          .text
            width 144px
            height 72px
            line-height 36px
            color #333
            font-size 24px
            text-align center
            

 
</style>
