<template>
    <div class="tab-control">
        <template v-for="(item, index) in typeName">
            <div class="tab-control-item" 
            :class="{active: currentIndex === index}"
            @click="btnClick(index)">{{ item }}</div>
        </template>
    </div>
</template>

<script>
    export default{
        props: {
            typeName: {
                type: Array,
                default: () => {
                    return ["*", "*", "*"]
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        emits: ["TabItemClick"],
        methods: {
            btnClick(index) {
                this.currentIndex = index
                this.$emit("TabItemClick",index)
            }
        }
        
    }
</script>

<style scoped>
    .tab-control{
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        cursor: pointer;
    }
    .active{
        border-bottom: 2px solid orangered;
        color: orangered;
    }
</style>