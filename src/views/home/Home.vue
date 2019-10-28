<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
     <tab-control 
          v-show="isShowTabControl"
          @getGoodsType="getGoodsType" 
          ref="tabControl1"
          class="tabbarControl" 
          :titles="['流行','新款','精选']">
      </tab-control>

    <scroll class="wrapper"  
            ref="scroll"
            :probe-type="3"  
            :pull-up-load="true"
            @scroll="contentScroll"
            @loadMore="loadMore"
            >
      <!-- 轮播图部分 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <!-- 推荐部分 -->
      <recommend :recommends="recommends"></recommend>
      <!-- 本周流行 -->
      <feature-view />
      <!-- 选项栏部分 -->
      <tab-control 
          ref="tabControl2"
          @getGoodsType="getGoodsType" 
           
          :titles="['流行','新款','精选']">
      </tab-control>
      <!-- 商品列表 -->
      <goods-list :goods-list="showGoods" />
    </scroll>
     
    <back-top @click.native="backTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  //导入子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/RecommendView'
  import FeatureView from './childComps/Feature'
  //导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'
  //导入用到的方法
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  //导入防抖动函数
  import {debounce} from 'common/utils'
  //导入混入文件
  import {itemListenerMixin} from 'common/mixin'

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
        goodsTypes: ['pop', 'new', 'sell'],
        isShowBackTop: false,
        tabOffsetTop: 0,
        isShowTabControl: false,
        
        saveY: 0
         
      }
    },
    components: {
      HomeSwiper,
      Recommend,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins: [itemListenerMixin],
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
     
      //事件监听相关方法
      getGoodsType(index) {
        this.currentType = this.goodsTypes[index];
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTop() {
          this.$refs.scroll.scrollTo(0, 0)
         
      },
      contentScroll(position) {
        //监听是否显示“返回顶部”
        this.isShowBackTop = (-position.y) > 1000
        //监听tabbarControl是否需要固定定位
        this.isShowTabControl = (-position.y) > this.tabOffsetTop

        
        
      },
      loadMore() {
         
        this.getHomeGoods(this.currentType)
         
         
      },
      swiperImageLoad() {
        // console.log('22')
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log( this.$refs.tabControl2)
        // console.log(this.$refs.tabControl2.$el.offsetTop)
        // console.log(this.$refs.tabControl.$el.offsetTop)
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
          //数据加载更多后，刷新可滚动的高度
          // this.$refs.scroll.scroll.refresh()
          // //加载完成后调用BScroll中的finishPullUp方法，才可以进行下一次的加载
          this.$refs.scroll.finishPullUp()

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
    mounted() {
     
    },
    activated () {
      // console.log(this.saveY)
      // console.log(this.saveY)
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated () {
      this.saveY = this.$refs.scroll.getScrollY()
      //隐藏起来后取消图片事件总线的监听
      //$bus.$off第1个参数是事件总线的名称，第二个是具体的函数名
      this.$bus.$off('homeItemImageLoadFinish', this.refresh)
      // console.log(this.saveY)
      // console.log(this.$refs.scroll.getScrollY())
      // console.log(this.saveY)
    }

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
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10; */
    /* box-shadow: 0 1px 1px rgba(10, 10, 10 , .3) */
  }

  .center {
    color: #fff;
  }

  .tabbarControl {
    position: relative;
    top: -1px;
    z-index: 10; 
  }

  .wrapper {
      overflow: hidden;
      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
  }
</style>