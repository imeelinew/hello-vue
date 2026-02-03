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
      }
    ]
  },
  {
    path: '/home',
    redirect: '/',
    alias: '/backhome'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
