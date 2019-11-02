<template>
  <div class="check-button" :class="{isCheck: check}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props: {
        check: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
    .check-button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ddd;
    }
    .isCheck {
        background-color: red;
        border-color: red;
    }
</style>