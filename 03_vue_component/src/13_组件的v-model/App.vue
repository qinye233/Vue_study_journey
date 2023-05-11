<template>
    <div class="app">
        <counter v-model="appCounter"></counter>
        <!-- 下面这一行是v-model组件绑定原理 -->
        <!-- <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter> -->
    </div>
</template>

<script>
    import Counter from "./Counter.vue";
    export default{
        components: {
            Counter
        },
        data() {
            return {
                appCounter: 100
            }
        }
    }
</script>

<style scoped>

</style>