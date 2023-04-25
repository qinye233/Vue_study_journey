<template>
    <tab-control :type-name="['衣服', '鞋子', '裤子']"
    @tab-item-click="itemClick"></tab-control>
    <h1>{{ indexPage }}</h1>
</template>

<script>
    import TabControl from "./TabControl.vue";
    export default{
        components: {
            TabControl
        },
        data() {
            return {
                productContent: ["衣服页面", "鞋子页面", "裤子页面"],
                indexPage: ""
            }
        },
        methods: {
            itemClick(index) {
                this.indexPage = this.productContent[index]
            }
        }
    }
</script>

<style scoped>

</style>