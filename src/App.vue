<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
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
body
  overflow auto
  #app
    width 750px
    height 1334px
    position relative
</style>
