<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        scrollTo(x, y, time = 600){
           this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
           this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
          console.log('---')
           this.scroll && this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    },
    mounted() {
        //创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        //监听滚动的位置
        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })
        //监听滚到到底部
        this.scroll.on('pullingUp', ()=> {
            this.$emit('loadMore')
            

        })
    },
}
</script>

<style scoped>

</style>