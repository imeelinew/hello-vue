import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/page-one',
    name: 'pageOne',
    component: () => import('../views/PageOne.vue')
  },
  {
    path: '/page-two',
    name: 'pageTwo',
    component: () => import('../views/PageTwo.vue')
  },
  {
    path: '/page-three',
    name: 'pageThree',
    component: () => import('../views/PageThree.vue'),
    children: [
      {
        path: 'child1',
        name: 'pageThreeChild1',
        component: () => import('../views/PageThreeChild1.vue')
      },
      {
        path: 'child2',
        name: 'pageThreeChild2',
        component: () => import('../views/PageThreeChild2.vue')
      },
      {
        path: 'child3',
        name: 'pageThreeChild3',
        component: () => import('../views/PageThreeChild3.vue')
      }
    ]
  },
  {
    path: '/home',
    redirect: '/',
    alias: '/backhome'
  },
  {
    path: '/page-four',
    name: 'pageFour',
    component: () => import('../views/PageFour.vue')
  },
  {
    path: '/page-five',
    name: 'pageFive',
    component: () => import('../views/PageFive.vue')
  },
  // 404 页面
  // 必须放在最后面
  // 匹配所有未匹配的路由
  {
    path: '*',  // 任意路径
    name: 'error',
    component: () => import('../views/ErrorPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
