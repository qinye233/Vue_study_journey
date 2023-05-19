import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

// 1.baseURL
// 当要发送多个同一通过以服务器的数据时，baseURL可以预设好一个服务器
axios.defaults.baseURL = "http://123.207.32.32:8000"

axios.get("/home/multidata").then(res => {
    console.log(res.data)
})

// 2.发送多个请求
axios.all([
    axios.get("/home/multidata").then(res => console.log(res.data)),
    axios.get("http://123.207.32.32:9001/lyric",{
        params: {
            id: 500665346
        }
    }).then(res => console.log(res.data.lrc))
])

// 3. axios.create() 可以创建多个不同的axios实例
// e.g.:
const instance = axios.create({
    baseURL: "",
    timeout: 1000,
    headers: {}
})

// 4.对实例配置拦截器
// 4.1.请求拦截
axios.interceptors.request.use((config) => {
    console.log("请求成功的拦截")
    // 可以设置loding动画
    return config
}, (err) => {
    console.log("请求失败的拦截")
    return err
})
// 4.2.响应拦截
axios.interceptors.response.use((res) => {
    console.log("响应成功的拦截")
    // 设置取消移除loding的动画
    return res.data
}, (err) => {
    console.log("响应失败的拦截")
    return err
})