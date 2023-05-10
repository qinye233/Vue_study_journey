<template>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">changeMessage</button>
    <div></div>
    <button @click="isHome = !isHome">HOME</button>
    <home v-if="isHome">HOME</home>
</template>

<script>
    import Home from "./home.vue"
    export default{
        components: {
            Home
        },
        data() {
            return {
                message: "Front learn journey is diffcult!",
                isHome: true
            }
        },
        computed: {
            changeMessage() {
            this.message = "But I was able to hold out until the end "
            }
        },
        // 1.组件被创建之前
        beforeCreate() {
            console.log("beforeCreate")
        },
        // 2.组件被创建完成
        created () {
            console.log("组件被创建完成：")
            console.log("1.发送网络请求，请求数据")
            console.log("2.监听eventbus事件")
            console.log("3.监听watch数据")
        },
        // 3.组件template准备被挂载
        beforeMount() {
            console.log("beforeMount")
        },
        // 4.组件template被挂载：虚拟DOM -> 真实DOM
        mounted() {
            console.log("mounted")
            console.log("1.获取DOM")
            console.log("2.渲染DOM")
        },
        // 5.数据更新
        // 5.1数据更新之前
        beforeUpdate() {
            console.log("beforeupdate")
        },
        // 5.2.数据被更新
        updated() {
            console.log("update")
        },
        // 6.卸载VNode -> DOM元素
        // 6.1 卸载之前
        beforeUnmount() {
            console.log("beforeUnmount")
        },
        // 6.2被卸载后
        unmounted() {
            console.log("unmount")
        }
    }
</script>

<style scoped>

</style>