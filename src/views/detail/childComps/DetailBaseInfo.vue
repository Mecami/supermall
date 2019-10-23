<template>
  <div class="itemInfo" v-if="Object.keys(goods).length !== 0">
      <div class="item-title">{{goods.title}}</div>

      <div class="item-price">
          <span class="new-price">{{goods.newPrice}}</span>
          <del class="old-price">{{goods.oldPrice}}</del>
          <span class="discount" :style="{backgroundColor: goods.discountBgC}">{{goods.discount}}</span>
      </div>

      <div class="item-msg">
          <span class="sell-num">{{goods.columns[0]}}</span>
          <span class="collection">{{goods.columns[1]}}</span>
          <span class="send-time">{{goods.services[goods.services.length-1].name}}</span>
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
    .itemInfo {
        padding: 6px;
        margin-top: 10px;
    }

    .item-title {
        font-size: 20px;
        text-indent: 1em;
        line-height: 110%;
        color: #111;
    }
    .item-price {
        margin: 10px 0;
    }

    .new-price {
        font-size: 26px;
        color: rgb(248, 130, 159);
        margin-right: 20px;
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
        font-size: 15px;
        padding: 2px;
    }
    .item-msg {
        display: flex;
        font-size: 18px;
        color: #666;
        justify-content: space-between;
        padding-bottom: 12px;
        border-bottom: 1px solid #eee;
    }

    .item-msg span {
        
    }
</style>