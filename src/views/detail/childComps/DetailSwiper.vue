<template>
    <swiper class="topImage">
        <swiper-item v-for="(item, index) in topImages" :key="index">
            <img :src="item" >
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .topImage {
        height: 300px;
    }
</style>