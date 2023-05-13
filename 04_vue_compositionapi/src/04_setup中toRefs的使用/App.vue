<template>
    <h2>{{ name }}---{{ age }}---{{ hobby }}</h2>
    <button @click="changeClickBtn">一个按钮</button>
</template>

<script>
    import { reactive, toRefs, toRef} from 'vue'
    export default{
        setup() {
            const info = reactive({
                name: "quirkybird",
                hobby: "coding",
                age: 20
            })
            // 如果直接对info进行解构，info数据将不会是响应式，可以用toRefs/toRef
            const {name, hobby} = toRefs(info)
            // 也可以单个解构
            const age = toRef(info, "age")
            const changeClickBtn = () => {
                hobby.value = "eating"
                age.value = 80
            }
            return {
                info,
                name,
                age,
                hobby,
                changeClickBtn
            }
        }
    }
</script>

<style scoped>

</style>