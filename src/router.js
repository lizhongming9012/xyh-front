import Vue from "vue";
import Router from "vue-router";
import index from "./components/index";
import computerlist from "./components/computerlist";
import query from "./components/query";

Vue.use(Router);

// export default new Router({
//   routes:
// })

let constRouter = [
  {
    path: "/",
    name: "首页",
    component: index,
    children: [
      {
        path: "computerlist",
        name: "电脑配置清单",
        component: computerlist
      },
      {
        path: "query",
        name: "配件查询",
        component: query
      }
    ]
  }
];

let router = new Router({
  routes: constRouter
});

// 重写路由的push方法
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

export default router;
