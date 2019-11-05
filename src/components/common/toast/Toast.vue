<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message = '默认信息', duration = 2000) {
            console.log('----')
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            }, duration)
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        z-index: 999;
        background-color: rgba(0, 0, 0, .5);
        color: #fff;

        border-radius: 6px;
        padding: 10px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>