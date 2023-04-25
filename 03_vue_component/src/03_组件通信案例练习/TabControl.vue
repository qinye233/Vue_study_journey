<template>
    <div class="tab-control">
      <template v-for="(item, index) in typeName" :key="index">
        <div class="tab-control-item" 
        :class="{ active: index === currentIndex }"
        @click="btnClick(index)">
        {{ item }}</div>
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
        emits:["tabItemClick"],
        methods: {
           btnClick(index) {
            this.currentIndex = index
            this.$emit("tabItemClick", index)
           }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        height: 30px;
        line-height: 30px;
        justify-content: space-around;
    }
    .active {
        border-bottom: 3px solid orangered;
        color: orangered;
    }
</style>