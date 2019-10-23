<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
      <!-- tabbar组件 -->
      <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar.vue'
 
 
export default {
  
  name: 'app',
  components: {
    MainTabbar
  },
   
  
}
</script>

<style>
  @import "assets/css/base.css";
</style>
