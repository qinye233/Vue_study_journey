<template>
    <show-info name="quirkybird" :age="20" height="1.76" ></show-info>
    <show-info name="qinye" :age="30" height="1.77"></show-info>
    <show-info ></show-info>
</template>

<script>
    import ShowInfo from './ShowInfo.vue';
    export default{
        components: {
            ShowInfo
        }
    }
</script>

<style scoped>

</style>