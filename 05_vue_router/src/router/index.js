import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router"

// 创建一个路由，映射关系
const router = createRouter({
  // 指定一种采用的模式 hash
  // history: createWebHashHistory(),
  // 细节二: 使用不同的路由模式 Hash 和 History
  history: createWebHistory(),
  routes: [
    //细节一 进入主页的默认路径 redirect: 重定向
    {
      path: "/",
      redirect: "/home",
    },
    {
        // 给一个独一无二的name属性
        // 如果要自定义属性，使用meta
      name: "home",
      path: "/home",
      component: () =>  import("../components/Home.vue") ,
      children: [
        {
            path: "",
            redirect: "/home/message"
        },
        {
            name: "news",
            path: "news",
            component: () => import("../components/HomeNews.vue")
        },
        {
            name: "message",
            path: "message",
            component: () => import("../components/HomeMessage.vue")
        }
      ]
    },
    {  
      name: "about",
      path: "/about",
      component: () => import("../components/About.vue")
      
    },
    {  
        name: "user",
        path: "/user/:id",
        component: () =>  import("../components/User.vue")
      },
    //   匹配不到的页面 NotFound
      {
        name: "NotFound",
        // 匹配规则，最后面加一个*，会把路径解析为一个数组
        path: "/:pathMatch(.*)*",
        component: () => import("../components/NotFound.vue")
      }
  ],
})

export default router;
