import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

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

export const BackTopMixin = {
    data() {
        return {
          isShowBackTop: false,

        }
    },
    components: {
        BackTop
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
           
        },
        listenBackTop(position) {
            this.isShowBackTop = (-position.y) > 1000
    
        }
    }
}