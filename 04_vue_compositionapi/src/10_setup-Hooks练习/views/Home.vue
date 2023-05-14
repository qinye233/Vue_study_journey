<template>
    <h3>Home页面</h3>

    <button @click="overviewBtn">概览</button>
    <button @click="historyBtn">历史</button>
    <button @click="eventBtn">事件</button>
</template>

<script>
    import useTitle from '../hooks/useTitle.js'
    export default{
        setup() {
            // 修改标题
            const title = useTitle("Home")
            // 监听title变化
            const overviewBtn = () => {
                title.value = 'overview'
            }
            const historyBtn = () => {
                title.value = 'history'
            }
            const eventBtn = () => {
                title.value = 'event'
            }
            return {
                overviewBtn,
                historyBtn,
                eventBtn
            }
        }
    }
</script>

<style scoped>

</style>