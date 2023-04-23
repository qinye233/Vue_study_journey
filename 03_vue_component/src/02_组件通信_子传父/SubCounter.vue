<template>
    <div class="sub">
        <button @click="btnClick(1)">-1</button>
        <button @click="btnClick(5)">-5</button>
        <button @click="btnClick(10)">-10</button>
    </div>
</template>

<script>
    export default{
        methods: {
            emits: ["sub"],
            btnClick(count) {
                // 让子组件发出去一个自定义事件
                // 让一个参数自定义的事件名称
                // 第二个参数是传递的参数
                this.$emit("sub", count)
            }
        }
    }
</script>

<style scoped>

</style>