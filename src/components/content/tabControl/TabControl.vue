<template>
  <div class="tab-control">
      <div class="tab-control-item" @click="itemClick(index,item)" v-for="(item, index) in titles" :key="item">
          <span :class="{isActive: index === currentIndex}" >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index
            this.$emit('getGoodsType',index)
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
    .tab-control {
        background-color: #fff;
        text-align: center;
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #666;

    }
    .tab-control-item {
        flex: 1;
    }
    .tab-control-item span {
        padding: 6px 10px; 

    }
    .isActive{
        color : rgb(248, 130, 159);
        border-bottom: 3px solid  rgb(248, 130, 159);
    }
</style>