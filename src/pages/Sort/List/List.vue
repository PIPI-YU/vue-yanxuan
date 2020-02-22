<template>
  <div id="listContainer">
    <div class="container" v-for="(item, index) in sortListData" :key="index">
      <div class="top">
        <img src="../../../common/images/Home/swiper01.webp" alt="">
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(itemList, index) in item.categoryList || item.subCateList" :key="index">
            <div class="image">
              <img :src="itemList.wapBannerUrl" alt="">
            </div>
            <div class="text">{{itemList.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex"
  export default {
    async mounted(){
      this.$store.dispatch("getSortNavDataAction");
      this.$store.dispatch("getSortListDataAction");

      this.sortNavData = this.sortListData.find(item=> item.id===this.$route.params.id*1);
    },
    watch:{
      $route(){
        this.sortNavData = this.sortListData.find(item=> item.id===this.$route.params.id*1);
      }
    },
    computed:{
      ...mapState({
        // sortNavData: state => state.sortNavData,
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
  position relative
  .container
    display flex
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
      position relative
      ul
        display flex
        flex-wrap wrap
        width 528px
        box-sizing border-box
        position absolute
        left 0
        top 0
        li
          width 144px
          height 216px
          margin-right 30px
          list-style none
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
