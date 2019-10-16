<template>
    <div class="tabbar-item" @click="itemClick">
        
        <div v-if="!isActive">
            <slot name="item-icon"></slot>

        </div>
         <div  v-else>
            <slot name="item-icon-active"></slot>

        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>

        </div>
       
    
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
   
    props:{
        path:{
            type:String
        },
        activeColor:{
            type:String,
            default: "#FC7DA3"
        }
    },
     computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path);
            
        }
    }
}
</script>

<style >
     .tabbar-item {
        flex: 1;
        text-align: center;
    }
    .tabbar-item img {
        width: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
    .tabbar-item div {
        font-size: 13px;
    }
    
</style>