<template>
      <swiper>
            <swiper-item v-for="item in banners" :key="item.link">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{ //props中如果数据是数组或对象，default要写成函数形式，然后返回对应的默认值
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    
</style>