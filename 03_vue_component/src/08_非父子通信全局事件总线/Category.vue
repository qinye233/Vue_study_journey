<template>
    <div>Category</div>
</template>

<script>
    import eventBus from "./utils/event-bus.js"
    export default{
        methods: {
            myEventHandler() {
                console.log("myEvent事件在Category中监听")
            }
        },
        created() {
            eventBus.on("myEvent", this.myEventHandler)

        },
        // 事件总线的取消
        unmounted() {
            eventBus.off("myEvent", this.myEventHandler)
        }
    }
</script>

<style scoped>

</style>