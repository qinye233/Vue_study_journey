<template>
    <h2>counter: {{ counter }}</h2>
    <button @click="counter++">+1</button>
</template>

<script>
    import { watchEffect, ref } from "vue"
    export default{
        setup() {
            const counter = ref(0)
             
            // 1.里面的回调函数会自动执行一次
            // 2.会自动收集响应式数据依赖
            const stopWatch = watchEffect(() => {
                console.log(counter.value)
                // 停止侦听
                if(counter.value >= 20) {stopWatch()}
            })
        
            return {
                counter
            }
        }
    }
</script>

<style scoped>

</style>