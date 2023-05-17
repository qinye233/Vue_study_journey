<template>
    <h2>App</h2>
    <router-link to="/home" active-class="active">home</router-link>
    <router-link to="/about" active-class="active">about</router-link>
    <router-link to="/user/999" active-class="active">user</router-link>
    <router-link to="/order" active-class="active">oerder</router-link>
    <!-- 编程式导航 -->
    <button @click="homePageClick">家</button>
    <button @click="aboutPageClick">关于</button>

    <router-view></router-view>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()
    function homePageClick() {
        // 基本的跳转
        router.push("/home")
    }
    function aboutPageClick() {
      // 较为复杂的跳转，带query参数
        router.push({
          path: "/about",
          query: {
            name: "quirkybird",
            age: 99
          }
        })
    }
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red
}
</style>
