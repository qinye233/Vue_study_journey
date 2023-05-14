<template>
    <div class="index-page">
    <h2>APP页面</h2>
    <h3>水平方向滚动值: {{ scrollX }} - 竖直方向滚动值: {{ scrollY }}</h3>
    <button @click="currentPage = 'Home'">Home</button>
    <button @click="currentPage = 'About'">About</button>
    <component :is="currentPage"></component>
    </div>
</template>

<script>
    import Home from './views/Home.vue'
    import About from './views/About.vue'
    import useTitle from './hooks/useTitle.js'
    import useScrollPosition from './hooks/useScrollPosition'
    import {ref} from 'vue'
    export default{
        components: {
            Home,
            About
        },
        setup() {
            const currentPage = ref("home")
            // 调用hooks中useTitle
            useTitle("App")
            // 使用hooks中useScrollPosition
            const {scrollX, scrollY} =  useScrollPosition()
            return {
                scrollX,
                scrollY,
                currentPage
            }
        }
    }
</script>

<style scoped>
    .index-page {
        height: 2000px;
    }
    h3 {
        position: fixed;
        top: 0;
        right: 0;
    }
</style>