<template>
    <div class="infos">
        <h2>name: {{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <h2>height:{{ height }}</h2>
        <h2>friends:{{ friends }}</h2>
    </div>
</template>

<script>
    export default{
        // 禁止父组件的非Props传入到子组件根元素上
        inheritAttrs: false,
        // 1.通过props实现父传子,数组方法
        // 数组方式的缺点：1> 不能限制类型 2> 不能设置默认值
        // props: ["name", "age", "height"]

        // 2.通过对象方法来实现父传子
        props: {
            name: {
                type: String,
                default: "默认名"
            },
            age: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            },
            // 如果传入为对象数据/Array,必须要用函数返回
            friends: {
                type: Object,
                default: () => {return {name: "quirkybird"}}
            }

        }

    }
</script>

<style scoped>

</style>