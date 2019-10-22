<template>
  <div>
      <p>我是详情页</p>
    <h2>{{iid}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            iid: null,
            name: ''
        }
    },
    created() {
        //如果有了keep-alive这里这会触发一次
        // this.iid = this.$route.params.iid
        console.log('created')
      
    },
    activated () {
        this.iid = this.$route.params.iid
        this.name = this.$route.params.name
        console.log(this.$route.params)
    }
}
</script>

<style scoped>

</style>