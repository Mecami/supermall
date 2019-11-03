<template>
  <div class="cart-item">
       <div class="check-button">
           <check-button @click.native="checkClick(product.iid)" :product="product"/>
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
        ...mapGetters(['cartList', 'selectAll'])
    },
    methods: {
        checkClick(iid) {
            // this.product.checked = !this.product.checked
            this.$store.commit(CHANGE_PRODUCT_SELECT, iid)
            // console.log(iid).
            if(this.product.checked) {
                console.log(this.$store.state.selectedCount)
                this.$store.commit('productIncrease')
                if(this.selectedCount == this.cartList.length) {
                    this.$store.commit('selectedAll')
                }
            }
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