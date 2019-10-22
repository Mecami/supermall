<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.link">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default(){

            }
        }
    }
}
</script>

<style scoped>
    .recommend {
        background-color: #fff;
        display: flex;
        text-align: center;
        padding: 13px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item img {
        width: 70px;
        height: 70px;
        margin-bottom: 6px;
    }
</style>