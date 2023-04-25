<template>
    <div class="app">
        <tab-control :type-name="['衣服', '鞋子', '裤子']"
        @tab-item-click="tabItemClick"></tab-control>
        <h1>{{ indexPage }}</h1>
    </div>
</template>

<script>
    import TabControl from "./TabControl.vue"
    export default{
        components: {
            TabControl
        },
        data() {
            return {
                productContents: ["衣服页面", "鞋子页面", "裤子页面"],
                indexPage: ""
            }
        },
        methods: {
            tabItemClick(index) {
                this.indexPage = this.productContents[index] 
            }
        }
    }
</script>

<style scoped>

</style>