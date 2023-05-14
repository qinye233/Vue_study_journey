<template>
    <h2>{{ message }}</h2>
    <button @click="message = 'Perseverance is the key to success.' ">changeMessage</button>
    <h2>{{ info }}</h2>
    <button @click="info.friend = 'qinye' ">changeSomething</button>
</template>

<script>
    import {ref, reactive, watch} from 'vue'
    export default{
        setup() {
            const message = ref("Learning Vue is long time.")
            const info = reactive({
                name:"quirkybird",
                age: 20,
                friend: {
                   name: "qinye233"
                }
            })

            // watch侦听数据变化
            watch(message, (newValue, oldValue) => {
                console.log(newValue, oldValue)
            })
            watch(info, (newValue, oldValue) => {
                console.log(newValue, oldValue)
                console.log(newValue === oldValue) //这里是因为他们都使用同一个地址,属于引用数据,所以相等
            })
            // 上面的都是返回的Proxy数据,我们可以让其返回原数据
            // watch(() => ({...info}), (newValue, oldValue) => {
            //     console.log(newValue, oldValue)
            // }, {
            //     immediate: true,
            //     deep: true
            // })

            return {
                message,
                info
            }
        }
    }
</script>

<style scoped>

</style>