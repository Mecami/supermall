<template>
  <div class="shop-info">
      <div class="shop-name">
          <img :src="shop.logo">
          <h2>{{shop.name}}</h2>
      </div>
      <div class="shop-msg">
          <div class="left">
              <div class="sells">
                  <h3>{{shop.sells | cellsCountFilter}}</h3>
                  <h4>总销量</h4>
              </div>
              <div class="goods-count">
                  <h3>{{shop.goodsCount}}</h3>
                  <h4>全部宝贝</h4>
              </div>
          </div>
           
          <div class="right">
                <div class="score-info" v-for="(item, index) in shop.score" :key="index">
                    <span>{{item.name}}</span>
                    <span class="score" :class="{scoreBetter:item.isBetter}">{{item.score}}</span>
                    <span class="high-or-low" :class="{better:item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
                </div>
          </div>
      </div>
      <div class="go-shop">
          <span>进店逛逛</span>
      </div>
      <div class="ppp"></div>

      
  </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
   
    filters: {
        cellsCountFilter(num) {
            if(num < 10000) return num;
            return (num / 10000).toFixed(1) + '万'
        }
        

    }
}
</script>

<style scoped>
    .ppp {
        height: 80px;
    }
    .shop-info {
         border-top: 5px solid #ddd;
         
    }
    .shop-name {
       
        display: flex;
        align-items: center;
        margin-top: 20px;

    }
    .shop-name img {
        border-radius: 50%;
        margin: 0 20px;
        overflow: hidden;
        width: 60px;
        height: 60px;
        border: 1px solid #ddd
    }
    .shop-name h2 {
        font-size: 24px;
        font-weight: 400;
    }
    .shop-msg {
        padding: 0 10px;
        display: flex;
        margin-bottom: 20px;
    }
    .shop-msg h3 {
        margin-bottom: 13px;
    }
    .shop-msg .left{
       flex: 1;
       margin: 20px 0;
       padding-right: 20px;
       
        border-right: 1px solid #ddd;
        display: flex;
        color: #222;
        align-items: center;
    }
    
    .sells, .goods-count {
        flex: 1;
        font-size: 16px;
        font-weight: 400;
        color: #333;
        text-align: center;
    }
    .shop-msg .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 400;
        color: #222;
        padding-left: 20px;
        /* margin-left: 20px;
        margin-right: 10px; */
        
         
    }
    .score-info {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 8px; */
    }
    .score {
        color: rgb(63, 180, 63);
    }
    .right .scoreBetter {
        color: red;
    }
    .high-or-low {
        background-color: rgb(63, 180, 63);
        color: #fff;
        padding: 2px;
    }
    .right .better {
        background-color: red;
    }
    .go-shop {
        text-align: center;
        
    }
    .go-shop span {
        border-radius: 10px;
        padding: 10px 60px;
        background-color: #eee;
        color: #666;
    }
  
</style>