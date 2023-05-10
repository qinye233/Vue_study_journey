<template>
    <div>
        <template v-for="(item, index) in buttonName" :key="index">
            <button
                @click="itemClick(index)"
                :class="{active: currentIndex === index}"
            >{{ item }}</button>
        </template>
        <!-- 1.实现组件切换展示方法一，条件判断 -->
        <!-- <div>
            <template v-if="currentIndex === 0">
                <home></home>
            </template>
            <template v-else-if="currentIndex === 1">
                <about></about>
            </template>
            <template v-else-if="currentIndex === 2">
                <category></category>
            </template>
        </div> -->

        <!-- 2.第二种方式，动态组件component -->
        <component 
            name="quirkybird" address="巴中市"
            @homeClick="btnClick"
        :is="buttonName[currentIndex]"></component>
    </div>
</template>

<script>
    import Home from "./views/Home.vue";
    import About from "./views/About.vue";
    import Category from "./views/Category.vue";

    export default{
        components: {
            Home,
            About,
            Category
        },
        data() {
            return {
                buttonName: ["Home", "About", "Category"],
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index
            },
            btnClick(payload) {
                console.log("~~~~" + payload)
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
</style>