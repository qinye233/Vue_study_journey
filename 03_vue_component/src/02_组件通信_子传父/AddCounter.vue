<template>
    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(5)">+5</button>
        <button @click="btnClick(10)">+10</button>
    </div>
</template>

<script>
    export default{ 
        //声明自定义的事件
        emits: ["add"],
        methods: {
            btnClick(count) {
                // 自定义事件
                this.$emit("add", count)
            }
        }
    }
</script>

<style scoped>

</style>