<template>
    <h2>counter: {{ counterStore.counter }}</h2>
    <h2>counter: {{ counter }}</h2>
    <button @click="increment">+1</button>
</template>

<script setup>
    import useCounter from '@/stores/counter'
    import { storeToRefs } from 'pinia'
    const counterStore = useCounter()
    const {counter} = storeToRefs(counterStore)
    function increment() {
        counterStore.counter++
    }

</script>

<style scoped>

</style>