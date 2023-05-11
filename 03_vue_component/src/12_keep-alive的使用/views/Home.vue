<template>
    <div>
        <h2>home页面</h2>
        <button @click="calcClick()">+1</button>
        <h2>{{ count }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                count: 0
            }
        },
        methods: {
            calcClick() {
                this.count += 1
            }
        },
        unmounted() {
            console.log("home unmounted")
        },
        // 对于保持KeepAlive的组件，为了监听组件是否被切换
        // keep-alive保持活跃状态
        activated() {
            console.log("actived")
        },
        // 组件处于非活跃状态
        deactivated() {
            console.log("deactivated")
        }
    }
        
</script>

<style scoped>

</style>