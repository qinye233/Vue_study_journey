<template>
    <h2>{{ fullName }}</h2>
    <button @click="changeFullNameBtn">修改姓名</button>
</template>

<script>
    import {reactive, ref, computed} from 'vue'
    export default{
        setup() {
            const names = reactive({
                firstName: "Steve",
                lastName: "Jobs"
            })

            //1.直接传入一个函数，其实是使用了getter方法 
            // const fullName = computed(() => {
            //     return names.firstName + " " + names.lastName
            // })

            // 2.完整的写法
            const fullName = computed({
                set: (newValue) => {
                    const templateName = newValue.split(" ")
                    names.firstName = templateName[0]
                    names.lastName = templateName[1]
                },
                get: () => {
                    return names.firstName + " " + names.lastName
                }
            })

            // 事实上，computed返回的是一中ref值（computedRefImpl）,访问这个值需要解包
            const changeFullNameBtn = () => {
                fullName.value = "quirky bird"
            }

            return {
                names,
                fullName,
                changeFullNameBtn
            }
        }
    }
</script>

<style scoped>

</style>