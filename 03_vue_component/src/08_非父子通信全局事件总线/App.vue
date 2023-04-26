<template>
    <home></home>
    <h2>{{ message }}</h2>
</template>

<script>
import eventBus from "./utils/event-bus.js";
import Home from "./Home"
    export default{
        components: {
            Home
        },
        data() {
            return {
                message: "今天感觉有点累",
            }
        },
       created() {
        // 事件监听
        eventBus.on("myEvent", (name, age, height) => {
            console.log("myEvent事件在App中",name, age, height)
            this.message = `${this.message},${name},${age},${height}`
        })
       }
    }
</script>

<style scoped>

</style>