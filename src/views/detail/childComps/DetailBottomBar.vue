<template>
  <div class="bottom-bar">
      <div class="bottom-bar-left">
          <div>
              <span class="icon service"></span>
              <div class="text">客服</div>
          </div>

           <div>
              <span class="icon shop"></span>
              <div class="text">店铺</div>
          </div>

           <div>
              <span class="icon collection"></span>
              <div class="text">收藏</div>
          </div>
      </div>
      <div class="bottom-bar-right">
          <div class="cart" @click="addToCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        addToCart() {
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 49px;
        background-color: #fff;
        position: relative;
        z-index: 12;
        display: flex;
    }
    .bottom-bar-left, .bottom-bar-right {
        flex: 1;
    }
    .bottom-bar-left {
        display: flex;
    }
    .bottom-bar-left>div {
        flex: 1;
        color: #333;
        font-size: 14px;
        text-align: center;
         
    }
    .service, .shop, .collection {
         display: block;
         height: 24px;
         width: 24px;
         margin: 3px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") no-repeat;
        /* 设置宽度背景图宽度100%，高度自适应 */
        background-size: 100% auto; 
    }
    .service {
         background-position:  0 -56px;
    }
    .shop {
         background-position:  0 -106px;
    }
    .collection {
         background-position:  0 2px;
    }

    .bottom-bar-right {
        display: flex;
        font-size: 16px;
         
    }
    .cart, .buy {
        flex: 1;
        text-align: center;
        line-height: 49px;
    }
    .cart {
        background-color: rgb(247, 237, 99);
        color: #444;
    }
    .buy {
        background-color:rgb(248, 130, 159);
        color: #fff;
    }
</style>