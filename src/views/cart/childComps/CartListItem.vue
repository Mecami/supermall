<template>
  <div class="cart-item">
       <div class="check-button">
           <check-button 
             @click.native="checkClick(product.iid)" 
             :is-check="product.checked"/>
       </div>
        
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>

        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="item-bottom">
                <div class="item-price">￥{{product.realPrice}}</div>
                <div class="item-count">x{{product.count}}</div>
            </div>
        </div>
        
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {CHANGE_PRODUCT_SELECT} from 'store/mutation-types'
import {mapGetters} from 'vuex'
export default {
    name: 'CartListItem',
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList', 'selectAll', 'selectedCount', 'selectedProdectCount'])
    },
    methods: {
        checkClick(iid) {
            // this.product.checked = !this.product.checked
            //设置checked为true或者false
            this.$store.commit(CHANGE_PRODUCT_SELECT, iid)
            // console.log(iid).
            //设置后再判断
            // if (this.product.checked) {
            //     this.$store.commit('productIncrease')
            //     // console.log(this.$store.state.selectedCount)
              
            // } else {
            //     this.$store.commit('productDecrease')
            // }
            // this.product.checked ?  this.$store.commit('productIncrease') : this.$store.commit('productDecrease')
            // if (this.selectedCount == this.cartList.length) {
            //       // this.$store.commit('selectedAll')
            //       console.log('---')
            //       this.$store.commit('selectedAll')
            // }
            // this.$store.commit('selectedAll',  this.selectedProdectCount === this.cartList.length)
            // this.selectedProdectCount === this.cartList.length ?  this.$store.commit('selectedAll') :  this.$store.commit('selectedAll2')
        }
    }
}
</script>

<style scoped>
    .cart-item {
        /* width: 100%; */
        border-bottom: 2px solid #ddd;
        display: flex;
        padding: 8px;
    }
    .check-button {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     
    .item-img{
        margin: 0 10px;
    }
    .item-img img {
         height: 120px;
        width: 80px;
        border-radius: 5px;

    }
    .item-info {
        overflow: hidden;
        /* 或者设置宽度 min-width: 0或者比较小的值 !!!!!!!!!!!!!!*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 20px;
    }
    .item-info .item-title {
        font-size: 22px;
         
    }
    
    .item-title, .item-desc {
         /* 一行显示，溢出隐藏，设置省略号 */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .item-bottom {
        display: flex;
        justify-content: space-between;
    }
    .item-price {
        color: red;
    }
</style>