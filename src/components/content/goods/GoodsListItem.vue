<template>
    <div class="goods-item" @click="itemClick">
        <img :src="goodsItem.show.img" @load="itemImageLoad">
        <div class="goods-item-info">
            <p class="title">{{goodsItem.title}}</p>
            <div class="num">
                <span class="price">￥{{parseInt(goodsItem.price)}}</span>
                <img src="~assets/img/common/favor.png" >
                <span class="cfav">{{goodsItem.cfav}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        itemImageLoad() {
            // console.log('2222')
            this.$bus.$emit('itemImageLoadFinish')
        },
        itemClick() {
            this.$router.push('/detail/'+this.goodsItem.iid+'/jack')
            // this.$router.push({
            //     path: '/detail',
            //     query: {
            //         iid: this.goodsItem.iid
            //     }
            // })
        }
    }
}
</script>

<style scoped>
    .goods-item {
        width: 47%;
       margin-bottom: 20px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
    }
    .goods-item img {
        width: 100%;
        border-radius: 5px;
         
    }
    .goods-item-info {
         padding: 0 3px;
      

    }
    .title {
        font-size: 13px;
        color: #222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 6px 0;
    }
    .num {
        /* text-align: center; */
        display: flex;
        align-content: center;
        justify-content: center
        /* justify-content: space-between; */
    }
    .num img {
        width: 18px;
        height: 18px;
        margin-left: 13px;
    }
    .price {
        color: rgb(248, 130, 159);
    }
    
</style>