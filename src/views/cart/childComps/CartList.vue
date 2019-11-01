<template>
  <div class="cart-list">
      <cart-list-item v-for="(item, index) in List" 
                        :key="index" 
                        :product="item"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'
export default {
    components: {
        CartListItem
    },
    computed: {
        ...mapGetters({List: 'cartList'})
    }
}
</script>

<style scoped>

</style>