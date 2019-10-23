<template>
  <div id="detail">
      <!-- 顶部导航栏 -->
      <detail-nav-bar />
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"/>
      <!-- 商品信息 -->
      <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
//导入子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
//导入公共组件
import DetailSwiper from './childComps/DetailSwiper'
//导入函数
import {getDetail, Goods} from 'network/detail'
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {}
        }
    },
    components: {
        DetailNavBar,
        DetailBaseInfo,
        DetailSwiper
    },
    methods: {
        getDetail(){
            getDetail(this.iid).then(res => {
                console.log(res)
                const data = res.result
                //保存轮播图数据
                this.topImages = data.itemInfo.topImages
                //保存商品数据
                this.goods = new Goods(data.itemInfo, data.shopInfo, data.columns)

            })
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

</style>