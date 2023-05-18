<template>
    <h2>counter: {{ name }}</h2>
    <h2>counter: {{ age }}</h2>
    <button @click="changeUser">changeUser</button>
    <button @click="replaceUser">replaceUser</button>
    <button @click="resetUser">resetUser</button>
</template>

<script setup>
    import useUser from '@/stores/user';
    import { storeToRefs } from 'pinia';

    const userStore = useUser()
    const {name, age} = storeToRefs(userStore)

    function changeUser() {
        // 1.逐个修改
        // userStore.name = "qinye233"
        // userStore.age = 30
        // 2.同时多个修改
        userStore.$patch({
            name: "qinye233",
            age: 30
        })
    }
    function replaceUser() {
        userStore.$state = {
            name: "quirkybird"
        }
    }
    function resetUser() {
        userStore.$reset()
    }
</script>

<style scoped>

</style>