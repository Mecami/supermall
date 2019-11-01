<template>
  <div class="cart-item">
      {{product}}
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>

</style>