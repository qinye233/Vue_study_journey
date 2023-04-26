<template>
    <home-banner></home-banner>
    <button @click="isShowCategory = false">取消Category组件</button>
    <category v-if="isShowCategory"></category>
</template>

<script>
import Category from "./Category.vue";
import HomeBanner from "./HomeBanner"
    export default{
        components: {
        HomeBanner,
        Category
        },
        data() {
            return {
                isShowCategory: true
            }
        }
    }
</script>

<style scoped>

</style>