<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left">左边</slot>
        </div>
        <div class="center">
            <slot name="center">中间</slot>
        </div>
        <div class="right">
            <slot name="right">右边</slot>
        </div>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>
    .nav-bar{
        height: 44px;
        line-height: 44px;
        display: flex;
        text-align: center;
    }
    .left {
        background-color: #faa;
        flex-basis: 80px;
    }
    .center {
        background-color: orange;
        flex:1;
    }
    .right {
        background-color: greenyellow;
        flex-basis: 80px;
    }
</style>