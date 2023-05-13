<template>
    <h2>counter: {{ counter }}</h2>
    <button @click="changeCounter()">changeCounter</button>
    <br>
    <h2>name:{{ info.name }}   hobby:{{ info.hobby }}</h2>
    <button @click="changeInfo()">changeInfo</button>
    <hr>
    <h2>{{ count }}</h2>
    <button @click="changeCount()">changeCount</button>
</template>

<script>
    import {reactive} from 'vue'
    import {ref} from 'vue'
    export default{
        setup() {
            //1. 普通定义数据
            // 数据并不能做到响应式
            let counter = 100
            const changeCounter = () => {
                counter++
            }
            // 2.定义响应式数据
            // 2.1.reactive函数定义数据，定义比较复杂的数据
            let info = reactive({
                name: "quirkybird",
                hobby: "coding"
            })
            const changeInfo  = () => {
                info.hobby = "eating"
            }
            // 2.2.ref函数定义普通简单数据和复杂数据
            // 仅仅是一个浅层解包，在模板中使用不需要写value，不过数据比较复杂，需要手动解包
            let count  = ref(10)
            const changeCount = () => {
                count.value++
            }

            return{
                counter,
                changeCounter,
                info,
                changeInfo,
                count,
                changeCount
            }
        }
    }
</script>

<style scoped>

</style>