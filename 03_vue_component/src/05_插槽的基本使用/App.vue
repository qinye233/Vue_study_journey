<template>
    <!-- 插槽为一个按钮 -->
    <show-message messgae="今天天气：雨转晴">
        <button>收到</button>
    </show-message>
    <!-- 插槽为一个段落 -->
    <show-message>
        <p>虽然不知道信息是什么，却一定有它存在的意义</p>
    </show-message>
    <!-- 默认值 -->
    <show-message></show-message>
</template>
<script>
import ShowMessage from "./ShowMessage";
    export default{
        components: {
            ShowMessage
        }
    }
</script>

<style scoped>

</style>