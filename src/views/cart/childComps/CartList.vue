<template>
  <div class="cart-list">
      <cart-list-item v-for="(item, index) in List" 
                        :key="index" 
                        :product="item"
                        ref="cartListItem"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'
export default {
    name: 'CartList',
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