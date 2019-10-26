<template>
   
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>

          <div slot="center" class="titles">
              <div v-for="(item, index) in titles" :key="index" 
                    class="titles-item"
                    :class="{active: index === currentIndex}"
                    @click="titleClick(index)">
                  {{item}}
              </div>
          </div>
      </nav-bar>
   
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    components: {
        NavBar
    },
    methods: {
        backClick() {
            //这里用go(-1) 会出问题，不会记录原来的位置！！！
            this.$router.back()
        },
        titleClick(index) {
            this.currentIndex = index
            this.$emit('titleTypeClick', index)
        }
    }

}
</script>

<style scoped>
    .back img{
        margin-top: 10px; 
    }

    .titles {
        display: flex;
        color: #444;
    }
    .titles-item {
        flex: 1
    }
    .active {
        color: rgb(248, 130, 159);
    }
</style>