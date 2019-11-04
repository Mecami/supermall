<template>
    <div class="div1">
        <h2>我的</h2>
        <div class="bottom">
            <div class="son1 left">价格</div>
            <div class="son2 right">
                 数量
            </div>
        </div>
        <h1>我是h1</h1>
        <button @click="fadeOut" ref="btn">点我</button>
    </div>
</template>

<script>
export default {
    
    methods: {
        fadeOut() {
            this.$refs.btn.fadeOut
        }
    }
}
</script>

<style scoped>
    h1 {
        margin: 0;
    }
    .div1 {
        height: 300px;
        background-color: blue;
        /* position: relative; */
    }
    .bottom {
        margin-top: 200px;
        /* position: absolute;
        left: 10px;
        right: 10px;
        bottom: 10px; */
        
    }
    .son1 {
        
        background-color:pink;
    }
    .son2 {
       
        background-color: yellow;
       
        
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    
</style>