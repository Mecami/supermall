<template>

    <div id="tabbar">
     <slot></slot>
       
    </div>

</template>

<script>
 

    export default {
        components:{
            
        }
    }
</script>

<style>
    #tabbar {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        background-color: rgb(239, 245, 246);
        box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
    }

   
</style>