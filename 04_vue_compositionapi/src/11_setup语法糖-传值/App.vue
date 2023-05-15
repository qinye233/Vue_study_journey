<script setup>
    import showInfo from './showInfo.vue'
    import {onMounted, ref} from 'vue'
    // 1.使用setup语法糖，引入组件无需注册
    // 2.不需要返回变量或者函数 return {}
    // 3.使用defineProps()、defineEmits()和defineExpose()
        // 使用 <script setup> 的组件是默认关闭的
        // ——即通过模板引用(ref)或者 $parent 链获取到的组件的公开实例，
        // 不会暴露任何在 <script setup> 中声明的绑定。
    const message = ref('Vue journey')
    const changeMessage = (payload) => {
        message.value = payload
    }
    const showInfoRef = ref()
    onMounted(() => {
        console.log(showInfoRef.value.messageBtnClick)
    })
   

</script>

<template>
    <show-info :message="message" @btn-click="changeMessage" ref="showInfoRef"></show-info>
    
</template>

<style scoped>

</style>