<template>
    <div>
        <button @click="bannerBtnClick">banner按钮</button>
    </div>
</template>

<script>
    import eventBus from "./utils/event-bus.js"
    export default{
      methods: {
        bannerBtnClick() {
            console.log("bannerBtnClick")
            eventBus.emit("myEvent", "quirkybird", 20, 188)
        }
      }
    }
</script>

<style scoped>

</style>