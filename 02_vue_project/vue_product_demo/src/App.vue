<template>
  <IndexPage></IndexPage>
</template>

<script>
import IndexPage from "./components/appContent.vue";
export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: orangered;
  margin-top: 60px;
}
</style>
