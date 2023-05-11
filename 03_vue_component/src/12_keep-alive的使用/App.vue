<template>
    <div>
        <template v-for="(item, index) in buttonName" :key="index">
            <button
                @click="itemClick(index)"
                :class="{active: currentIndex === index}"
            >{{ item }}</button>
        </template>
        <!-- include组件的名称来自组件定义的name -->
        <!-- keep-alive属性 -->
        <!-- include 匹配名字的组件被缓存 -->
        <!-- exclude 任何匹配的组件名称不被缓存 -->
        <!-- max 最多有多少个组件被缓存，如果超出这个数，那么缓存组件最经没有被使用的将会被销毁 -->
        <keep-alive include="Home,About">
        <component :is="buttonName[currentIndex]"></component>
        </keep-alive>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'

    import Home from "./views/Home.vue";
    import About from "./views/About.vue";
    // import Category from "./views/Category.vue";

    // 使用函数导入，webpack可以分包处理
    // 异步组件
    const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))

    export default{
        components: {
            Home,
            About,
            Category: AsyncCategory
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