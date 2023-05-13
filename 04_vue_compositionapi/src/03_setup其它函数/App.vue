<template>
    <show-info :info="info" :roInfo="roInfo" 
    @change-info-age="changeInfoAge"
    @change-ro-info-Name="changeRoInfoName"
    ></show-info>
</template>

<script>
    import { reactive } from 'vue';
    import showInfo from './showInfo.vue'
    import {readonly} from 'vue'
    export default{
        components: {
            showInfo
        },
        setup() {
            // 我们是可以通过子组件来修改父组件的值（指向同一引用值，修改引用父组件的值自然会变），
            // 不过实际开发中并不能那么做，这是一个不规范的操作，如果多个子组件同时修改父组件的值，那会变得很混乱
            //  -单向数据流（规范）
                    // -子组件拿到数据后只能使用，不能修改
                    // -如果确实要修改，那么应该将事件传递出去，由父组件来修改数据
        const info = reactive({
            name: "quirkybird",
            age: 20,
            hobby: "coding"
        })

        const changeInfoAge = (age) => {
            info.age = age
        }
        const changeRoInfoName = (payload) => {
            info.name = payload
        }
        // readonly 只读不能修改
        // 其实本质就是readonly返回对象的setter方法被劫持了而已（返回的Proxy对象）
        let roInfo = readonly(info)
        return {
            info,
            changeInfoAge,
            roInfo,
            changeRoInfoName
        }
    }
    }
</script>

<style scoped>

</style>