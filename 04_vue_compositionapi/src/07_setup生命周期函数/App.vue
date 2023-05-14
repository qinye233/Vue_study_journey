<template>

</template>

<script>
    import { onMounted } from 'vue'
    export default{
        setup() {
            // 在compositionAPI中，生命周期钩子函数需要传入一个函数，同时需要引入才可以使用
            // onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBrforeUnmount,onUnmounted

            // tips: 因为setup 是围绕着beforeCreate和create生命周期钩子运行的，所以不需要显式的定义他们，
            // 换句话说,在以前Opations API 中beforeCreate 和create 里面执行的操作,直接在setup函数中编写
            onMounted(() => {
                console.log("mounted")
            })
        }
    }
</script>

<style scoped>

</style>