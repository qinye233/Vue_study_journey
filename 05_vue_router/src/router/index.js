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
      },
      {
        name: "order",
        path: "/order",
        component: () => import("../components/Order.vue")
      },
      {
        name: "login",
        path: "/login",
        component: () => import("../components/Login.vue")

      }
  ],
})

// 添加动态路由 
  // 第一个参数是添加的父路由名称,如果不填就是根路径上添加路由
  const bar = true
  if(bar) {
  router.addRoute("home", {
    name: "vip",
    path: "vip",
    component: () => import('../components/HomeVip.vue')
  })
}
  // 动态删除路由 removeRoute
  // 判断一个路由是否存在 hasRoute
  // 获取一个包含所有路由的数组 getRoutes

  // 路由导航守卫
  // 进行任何的路由跳转之前，传入的beforeEach函数都会被回调
  // 需求：进入到订单（order）页面时，判断用户是否登录（isLogin -> LocalStorage保存在token）
  // 情况一：用户未登录，点击订单页面后，跳转到登录页面
  // 情况二：用户已经登陆，点击订单页面后，直接到转到订单页面
  router.beforeEach((to, from) => {
    //回调函数两个参数， to:去向的路由对象， from: 离开的路由对象
      const token = localStorage.getItem("token")
      if(!token && to.path === "/order") {
        return "/login"
      }
  })
export default router;
