<template>
    <h2>登陆界面</h2>
    <button @click="loginBtn">登录按钮</button>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()
    function loginBtn() {
        localStorage.setItem("token", "23435%fsf25r2%fs2")
        router.push("/order")

    }
</script>

<style scoped>

</style>