<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center" class="center">购物街</div>
    </nav-bar>

    <scroll class="wrapper">
      <!-- 轮播图部分 -->
      <home-swiper :banners="banners" />
      <!-- 推荐部分 -->
      <recommend :recommends="recommends"></recommend>
      <!-- 本周流行 -->
      <feature-view />
      <!-- 选项栏部分 -->
      <tab-control @getGoodsType="getType" class="tabbar-control" :titles="['流行','新款','精选']"></tab-control>
      <!-- 商品列表 -->
      <goods-list :goods-list="showGoods" />
    </scroll>


  </div>
</template>

<script>
  //导入子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/RecommendView'
  import FeatureView from './childComps/Feature'
  //导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  //导入用到的方法
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          },
        },
        currentType: "pop",
        goodsTypes: ['pop', 'new', 'sell']
      }
    },
    components: {
      HomeSwiper,
      Recommend,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //事件监听相关方法
      getType(index) {
        this.currentType = this.goodsTypes[index];

      },
      //网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        })
      }

    },

    created() {
      //请求轮播图和推荐商品的数据
      this.getHomeMultidata();
      //请求商品列表
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

  }
</script>

<style>
  #home {
    /* margin-top: 44px; */
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: rgb(248, 130, 159);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    /* box-shadow: 0 1px 1px rgba(10, 10, 10 , .3) */
  }

  .center {
    color: #fff;
  }

  .tabbar-control {
    position: sticky;
    top: 44px;
  }

  .wrapper {
      
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
  }
</style>