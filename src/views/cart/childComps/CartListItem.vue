<template>
  <div class="cart-item">
       <div class="check-button">
           <check-button />
       </div>
        
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>

        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="item-bottom">
                <div class="price">￥{{product.realPrice}}</div>
                <div class="count">x1</div>
            </div>
        </div>
        
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
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
    }
}
</script>

<style scoped>
    .cart-item {
        /* width: 100%; */
        border-bottom: 2px solid #ddd;
        display: flex;
        padding: 5px;
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
         height: 150px;
        width: 110px;
        border-radius: 5px;

    }
    .item-info {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .item-desc {
        /* margin: 20px 0; */
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
    .price {
        color: red;
    }
</style>