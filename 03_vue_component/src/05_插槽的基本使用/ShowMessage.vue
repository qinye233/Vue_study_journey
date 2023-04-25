<template>
    <div class="content">
    <div>{{ message }}</div>
        <slot>
            <p>我是一个插槽的预设值</p>
        </slot>
    </div>
</template>

<script>
    export default{
        props:{
            message: {
                type: String,
                default: "我是一条未知信息"
            }

        }
    }
</script>

<style scoped>

</style>