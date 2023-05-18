<template>
    <h2>squareCounter: {{ counterStore.squareCounter }}</h2>
    <h2>squareCounterAddOne: {{ counterStore.squareCounterAddOne }}</h2>
    <h2>findFrirendName: {{ counterStore.findFrirendName(101) }}</h2>
    <h2>foo: {{ counterStore.foo }}</h2>
</template>

<script setup>
    import useCounter from '@/stores/counter';
    
    const counterStore = useCounter()

    
</script>

<style scoped>

</style>