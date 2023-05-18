<template>
    <h2>counter: {{ counterStore.counter }}</h2>
    <button @click="increment">+1</button>
</template>

<script setup>
    import useCounter from '@/stores/counter';

    const counterStore = useCounter()

    function increment() {
        counterStore.increment()
    }
</script>

<style scoped>

</style>