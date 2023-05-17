<template>
    <div>
        <h2>订单页面</h2>
        <ul>
            <li>货物一</li>
            <li>货物二</li>
            <li>货物三</li>
            <li>货物四</li>
        </ul>
        </div>
    <button @click="exitLoginBtn">取消登录</button>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const isLogin = true
    const router = useRouter()
    function exitLoginBtn() {
        localStorage.removeItem("token")

        router.push("/login")
    }
</script>

<style scoped>

</style>