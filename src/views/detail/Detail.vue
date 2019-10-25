<template>
  <div id="detail">
      <!-- 顶部导航栏 -->
      <detail-nav-bar />
      <scroll class="detail-wrapper" ref="scroll">
        <!-- 轮播图 -->
        <detail-swiper :topImages="topImages"/>
        <!-- 商品信息 -->
        <detail-base-info :goods="goods"/>
        <!-- 店铺信息 -->
        <detail-shop-info :shop="shop"/>
        <!-- 商品详细详细 -->
        <detail-goods-info :detail-info="detailInfo"/>
      </scroll>
  </div>
</template>

<script>
//导入子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
//导入公共组件
import Scroll from 'components/common/scroll/Scroll'
//导入函数
import {getDetail, Goods, Shop} from 'network/detail'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {}
        }
    },
    components: {
        DetailNavBar,
        DetailBaseInfo,
        DetailSwiper,
        DetailShopInfo,
        DetailGoodsInfo,
        Scroll
    },
    methods: {
        getDetail(){
            getDetail(this.iid).then(res => {
                console.log(res)
                const data = res.result
                //获取轮播图数据
                this.topImages = data.itemInfo.topImages
                //获取商品数据
                this.goods = new Goods(data.itemInfo, data.shopInfo, data.columns)
                //获取店铺数据
                this.shop = new Shop(data.shopInfo)
                //获取商品详情数据
                this.detailInfo = data.detailInfo
            })
        },
        imageLoad() {
            this.$refs.scroll.refresh()
        }
    },
    created() {
        //从route中获取商品的id
        this.iid = this.$route.params.iid
        //获取轮播图等其他数据
        this.getDetail()
         
      
    },
    activated () {
        
        console.log(this.$route.params)
    }
}
</script>

<style scoped>
    #detail {
        height: 100vh;
    }
    .detail-wrapper {
        /* 注意calc中的符号左右两边要有空格 */
        height: calc(100% - 44px);
        position: relative;
        z-index: 11;
        overflow: hidden;
        background-color: #fff;
    }
</style>