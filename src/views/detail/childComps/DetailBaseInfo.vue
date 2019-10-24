<template>
  <div class="goodsInfo" v-if="Object.keys(goods).length !== 0">
      <div class="goods-title">{{goods.title}}</div>

      <div class="goods-price">
          <span class="new-price">{{goods.newPrice}}</span>
          <del class="old-price">{{goods.oldPrice}}</del>
          <span v-show="goods.discount.length!==0" class="discount" :style="{backgroundColor: goods.discountBgC}">{{goods.discount}}</span>
      </div>

      <div class="goods-msg">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
     
     <div class="goods-services">
         <div class="goods-services-item" v-for="index in goods.services.length-1" :key="index">
             <img :src="goods.services[index-1].icon">
             <span>{{goods.services[index-1].name}}</span>
         </div>
     </div>
     

  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    },
   
    
}
</script>

<style scoped>
    .goodsInfo {
        padding: 7px;
        
    }

    .goods-title {
        margin: 8px 0;
        font-size: 20px;
        text-indent: 1em;
        line-height: 140%;
        color: #222
        ;

    }
    .goods-price {
        margin: 14px 0;
    }

    .new-price {
        font-size: 26px;
        color: rgb(248, 130, 159);
        margin-right: 30px;
    }

    .old-price {
        color: #666;
    }
    .discount {
        color: #fff;
        border-radius: 5px;
        position: relative;
        top: -15px;
        left: 0;
        font-size: 13px;
        padding: 2px;
    }
    .goods-msg {
        display: flex;
        font-size: 18px;
        color: #666;
        justify-content: space-between;
        padding-bottom: 12px;
        border-bottom: 1px solid #eee;
    }
    
    .goods-services {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        color: #666;
    }
    .goods-services-item {
        display: flex;
        align-items: center;

    }
    .goods-services img {
        width: 18px;
        height: 18px;
    }
</style>