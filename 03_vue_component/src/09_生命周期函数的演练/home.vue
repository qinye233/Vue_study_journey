<template>
    <h1>home</h1>
</template>

<script>
    export default{
        beforeCreate() {
            console.log("home beforeCreate")
        },
        unmounted() {
            console.log("home unmount")
        }
    }
</script>

<style scoped>

</style>