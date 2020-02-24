<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'

export default {
  name:"app",
  components:{
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
