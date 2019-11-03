<template>
    <div id="cart">
        <!-- 导航栏 -->
         <nav-bar class="nav-bar">
             <div slot="center">购物车({{cartLength}})</div>
         </nav-bar>
         <!-- 可滚动区域 -->
         <scroll class="wrapper" ref="scroll">
             <!-- 购物车中的商品 -->
             <cart-list ref="cartList"/>
         </scroll>
         <!-- 底部导航栏 -->
         <cart-bottom-bar />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
//导入公共组件
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
//导入子组件
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
    activated() {
        this.$refs.scroll.refresh()
    },
    components: {
        NavBar,
        Scroll,
        CartList,
        CartBottomBar
    },
    
    computed: {
        ...mapGetters(['cartLength'])
        //或者对象语法...mapGetters({length: 'cartLength'})
    },
    // methods: {
    //     selectAll() {
    //         this.$refs.cartList.$refs.cartListItem
    //     }
    // }
    
}
</script>

<style scoped>
    #cart {
        height: 100vh;
    }
    .nav-bar {
        background-color: rgb(248, 130, 159);
        color: #fff;
        
    }
    .wrapper {
        /* 注意calc中的符号两边必须有空格！！！！！ */
        height: calc(100% - 44px - 49px - 48px);
        overflow: hidden;
    }
    
</style>>
    
 