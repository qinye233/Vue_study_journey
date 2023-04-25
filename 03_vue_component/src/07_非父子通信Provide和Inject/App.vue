<template>
    <home></home>
</template>

<script>
import Home from "./Home"
    export default{
        components: {
            Home
        },
        data() {
            return {
                message: "今天感觉有点累"
            }
        },
        provide() {
            return {
                name: "quirkybird",
                message: this.message
            }
        }
    }
</script>

<style scoped>

</style>