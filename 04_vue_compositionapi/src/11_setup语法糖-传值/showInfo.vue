<template>
    <h2>{{ message }}</h2>
    <button @click="messageBtnClick">messageBtnClick</button>
</template>

<script setup>
    defineProps({
        message: {
            type: String,
            default: ''
        }
    })
   const emits =  defineEmits(["btnClick"])
   const messageBtnClick = () => {
        emits("btnClick", "have a fun day!")
   }

   defineExpose({
        messageBtnClick
   })
</script>

<style scoped>

</style>