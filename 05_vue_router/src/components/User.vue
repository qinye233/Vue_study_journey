<template>
    <!-- 拿到动态路由值的第一种方式 -->
    <h2>User页面 {{ $route.params.id }}</h2>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    // 拿到动态路由的第二种方式
    const route = useRoute()
    console.log(route)
    console.log(route.params.id)
</script>

<style scoped>

</style>