<template>
  <div class="goods-list">
      <goods-list-item v-for="item in goodsList" :key="item.show.img" :goods-item="item" /> 
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    components: {
        GoodsListItem
    },
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 15px;
    }
     
</style>