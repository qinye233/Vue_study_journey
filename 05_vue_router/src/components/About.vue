<template>
    <h2>About页面 {{ $route.query }}</h2>
    <!-- 路由前进或者后退 -->
    <button @click="btnClick">按钮</button>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()

    function btnClick() {
        // 返回
        // router.back()
        // 前进
        // router.forward()
        // go 操作多少步
        router.go(-1)
    }
</script>

<style scoped>

</style>