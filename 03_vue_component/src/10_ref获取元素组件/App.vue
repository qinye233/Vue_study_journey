<template>
    <h2 ref="title">2023/5/10</h2>
    <button ref="btn" @click="btnClick()">开心</button>
    <banner ref="banner"/>
</template>

<script>
    import Banner from "./Banner.vue"
    export default{
        components: {
            Banner
        },
        methods: {
            btnClick() {
            // 1.获取h2/button元素
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
            //2.获取组件实例
                console.log(this.$refs.banner)
            // 2.1可以直接调用子组件的方法
                this.$refs.banner.bannerBtnClick()
            // 2.2可以获取到子组件的元素节点
                console.log(this.$refs.banner.$el)
            // 3.还有两个实例组件方法
            console.log(this.$parent) //获取父组件
            console.log(this.$root) //获取根组件
            }
        }
    }
</script>

<style scoped>

</style>