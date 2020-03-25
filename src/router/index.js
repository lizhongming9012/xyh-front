import Vue from 'vue'
import VueRouter from 'vue-router'
// 引用页面模板->供路由使用
import index from '../views/index.vue'
import pageQuiButton from '../views/pageQuiButton.vue'
// import pageQuiList from '../views/pageQuiList.vue'
import pageQuiNav from '../views/pageQuiNav.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/btn',
    name: 'btn',
    component: pageQuiButton
  // },
  // {
  //   path: '/list',
  //   name: 'list',
  //   component: pageQuiList
  },
  {
    path: '/nav',
    name: 'nav',
    component: pageQuiNav
  }
]

const router = new VueRouter({
  routes
})

export default router
