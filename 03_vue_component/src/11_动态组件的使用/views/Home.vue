<template>
    <div>
        <h2>{{name}} -- {{address}}</h2>
        <button @click="homeBtnClick()">homeBtn</button>
    </div>
</template>

<script>
    export default{
        props: {
            name: {
                type: String,
                default: ""
            },
            address: {
                type: String,
                default: ""
            }
        },
        emits:["homeClick"],
        methods: {
            homeBtnClick() {
                this.$emit("homeClick","home")
            }
        }
    }
        
</script>

<style scoped>

</style>