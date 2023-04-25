<template>
    <nav-bar>
        <!-- 还有一种动态插槽，v-slot:[变量] 即可动态插槽 -->
        <!-- 语法糖: v-slot -> # -->
        <template v-slot:left>
        <button>返回</button>
        </template>
        <template v-slot:center>
        <span>内容</span>
        </template>
        <template v-slot:right>
        <a href="#">链接</a>
        </template>
    </nav-bar>
</template>

<script>
    import NavBar from "./NavBar.vue"
    export default{
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>