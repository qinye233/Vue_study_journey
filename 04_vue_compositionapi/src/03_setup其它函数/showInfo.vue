<template>
  <h2>{{ info }}</h2>
  <button @click="changeInfoAge">changeInfoAge</button>
  <h2>{{ roInfo }}</h2>
  <button @click="changeRoInfoName">changeRoInfoName</button>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {{}},
        },
    roInfo: {
        type: Object,
        default: () => {{}}
    }
  },
  emits: ["changeInfoAge", "changeRoInfoName"],
  setup(props, context) {
    const  changeInfoAge = () => {
        context.emit("changeInfoAge", "30")
    }
    const changeRoInfoName = () => {
        context.emit("changeRoInfoName", "qinye233")
    }

    return {
    changeInfoAge,
    changeRoInfoName
  }
  }
}
</script>

<style scoped></style>
