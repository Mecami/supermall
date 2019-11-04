<template>
  <div class="check-button" :class="{isCheck: isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props: {
        isCheck: {
            type: Boolean,
            default: false
        },
        // product: {
        //     type: Object,
        //     default() {
        //         return {}
        //     }
        // },
        // selectAll: {
        //     type: Boolean,
        //     default: false
        // }
    },
    computed: {
        // isCheck() {
        //     return this.product.checked
        // }
    }
}
</script>

<style scoped>
    .check-button {
        text-align: center;

        border: 1px solid #ddd;
        background-color: #fff;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
    }
    .isCheck {
        background-color: red;
        border-color: red;
    }
</style>