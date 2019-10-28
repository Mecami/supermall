<template>
  <div id="detail">
      <!-- 顶部导航栏 -->
      <detail-nav-bar @titleTypeClick="titleTypeClick"/>

      <scroll class="detail-wrapper" ref="scroll" @scroll="scroll">
        <!-- 轮播图 -->
        <detail-swiper :topImages="topImages"/>
        <!-- 商品信息 -->
        <detail-base-info :goods="goods"/>
        <!-- 店铺信息 -->
        <detail-shop-info :shop="shop"/>
        <!-- 商品详细信息 -->
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
        <!-- 商品参数信息 -->
        <detail-param-info ref="param" :param-info="paramInfo" />
        <!-- 商品评论信息 -->
        <detail-comment-info ref="comment" :comment-info="commentInfo" />
        <!-- 相关推荐 -->
        <goods-list ref="recommend" :goods-list="recommends"/>
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
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
//导入公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
//导入函数
import {getDetail,getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
//导入防抖函数
import {debounce} from 'common/utils'
//导入混入文件
import {itemListenerMixin} from 'common/mixin'

export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            themeTopYs: [],
            getThemeTopYs: null
             
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        Scroll,
        GoodsList
    },
    mixins: [itemListenerMixin],
    methods: {
        //网络请求函数
        _getDetail() {
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
                //获取商品参数数据
                this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
                //获取评论数据
                if(data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            })
        },
        _getRecommend() {
            getRecommend().then(res => {
                this.recommends = res.data.list
            })
        },
        //监听GoodsInfo中图片的加载，加载完成后只刷新一次
        imageLoad() {
            //方式1：获取图片的个数，每加载1张就累加，直到个数等于图片的总个数，才发射函数
            // console.log('GoodsInfo中的刷新')
            // this.$refs.scroll.refresh()
            //方式2：调用防抖处理过的refresh函数
            this.refresh()
            this.getThemeTopYs()
        },
        titleTypeClick(index) {
        
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        },
        scroll() {

        }
    },
    created() {
        //从route中获取商品的id
        this.iid = this.$route.params.iid
        //获取轮播图等其他数据
        this._getDetail()
        //获取商品推荐数据
        this._getRecommend()
        //组件创建完就获得一个防抖处理过的获取titles对应的offsetTop的函数
        this.getThemeTopYs = debounce(() => {
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            console.log(this.themeTopYs)
        }, 100)

        
      
    },
    mounted() {
   
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