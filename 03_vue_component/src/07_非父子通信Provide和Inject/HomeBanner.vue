<template>
    <div>{{ name + message }}</div>
</template>

<script>
    export default{
        inject:["name", "message"]
    }
</script>

<style scoped>

</style>