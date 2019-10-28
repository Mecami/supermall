import {debounce} from 'common/utils'

export const itemListenerMixin = {
    data() {
        return {
            busItemImageLoadFinish: null,
            //将refresh写到这里后，组件的methouds中也可以直接使用该函数
            refresh: null
        }
    },
    mounted() {
       
    
          this.refresh = debounce(this.$refs.scroll.refresh,50)
          this.busItemImageLoadFinish = () => {
            //这里的refresh函数已经做了防抖动处理，只会触发一次
             this.refresh()
             console.log('detailBus')
            
          }
          this.$bus.$on('homeItemImageLoadFinish', this.refresh)
        },
}