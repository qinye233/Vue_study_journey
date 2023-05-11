<template>
    <div class="Counter">
        <h2>counter: {{ modelValue }}</h2>
        <button @click="changeCounterBtn()">changeCounter</button>
    </div>
</template>

<script>
    export default{
        props: {
            modelValue: {
                type: String,
                default: ''
            }
        },
        emits: ["update:modelValue"],
        methods: {
            changeCounterBtn() {
                this.$emit("update:modelValue", 9999)
            }
        }
    }
</script>

<style scoped>

</style>