<template>

</template>

<script>
    import {reactive} from 'vue'
    import {ref} from 'vue'
    export default{
        // 定义响应式数据 reactive/ref
        // 强调：ref 也可以定义复杂的数据
        const info = ref({})
        console.log(info.value)

        // 1.reactive的应用场景
        // 1.1.条件一：reactive应用于本地的数据
        // 1.2.条件二：多个数据之间有关系/联系（聚合的数据，组织在一起会有特定的作用）
        const account = reactive({
            username: "coderwhhy",
            password: "1234567"
        })

        // 2.ref的应用场景：其他的场景基本使用ref（computed）
        // 2.1.定义本地的一些简单数据
        const message  = ref("hello world")

        // 2.2.定义从网络中获取的数据也是使用ref
        const resource = ref([])
        mounted() {
            const serverResources = ["xxxx", "xxxx", "xxxx"]
            resource.value = serverResources
        }

        return {
            info,
            account,
            message,
            resource
        }
    }
</script>

<style scoped>

</style>