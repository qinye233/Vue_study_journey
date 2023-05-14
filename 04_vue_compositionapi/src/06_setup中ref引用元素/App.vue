<template>
    <h2 ref="h2Title">我是一个小标题</h2>
    <button ref="smallButton">随便的一个小按钮</button>
</template>

<script>
    import {ref, onMounted} from 'vue'
    export default{
        setup() {
            // 在compositionAPI里，定义一个与ref属性匹配的名字，以获取引用元素
            const h2Title = ref()
            const smallButton = ref()
            // 相同道理可以获得组件的引用
            onMounted(() => {
                console.log(h2Title.value)
                console.log(smallButton.value)
            })

            return {
                h2Title,
                smallButton
            }
        }
    }
</script>

<style scoped>

</style>