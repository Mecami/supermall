<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
      
      <div class="detail-top">
          <div class="icon-start">
              <div class="icon-dot"></div>
              <div class="icon-line"></div>
          </div>
          <div class="detail-desc">{{detailInfo.desc}}</div>
          <div class="icon-end">
              <div class="icon-line"></div>
               <div class="icon-dot"></div>
          </div>
          <div class="detail-key">{{detailInfo.detailImage[0].key}}</div>
      </div>
      <div class="detail-imgs">
          <img :src="item" 
                v-for="(item, index) in detailInfo.detailImage[0].list" 
                :key="index"
                @load="imageLoad">
      </div>
  </div>
</template>

<script>
export default {
    data() {
       return {
            count: 0,
            imageCounts: 0
       }
    },
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {
            //每当加载完一张图片就count++然后跟总图片数对比，如果相等，发射事件给父组件，
            //让它调用scroll中的refresh函数进行刷新滚动的高度
            if(++this.count === this.imageCounts) {
                this.$emit('imageLoad')
            }
        }
    },
    watch: {
        detailInfo() {
            this.imageCounts = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
   
    .detail-info {
        padding: 0 4px 20px 4px;
       
        border-bottom: 5px solid #ddd;
    }
    .detail-top {
        padding: 20px;
    }
    .icon-end {
        display: flex;
        justify-content: flex-end;
    }
    
    .detail-desc {
        margin: 20px 0;
        color: #333;
        font-size: 18px;
        line-height: 140%;
        
    }
    .detail-key {
        
        font-size: 20px;
        color: #111;
    }
    .detail-imgs img {
        width: 100%;
    }
    .icon-dot {
        width: 8px;
        height: 8px;
        background-color: #000;
    }
    .icon-line {
        width: 100px;
        height: 1px;
        background-color: #222;
    }
</style>