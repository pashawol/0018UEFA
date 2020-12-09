import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Index = () => import('@/views/Index')
const Theme = () => import('@/views/Theme')
const Culture = () => import('@/views/Culture')
const Q1 = () => import('@/views/Q1')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/index',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/theme',
          name: 'Theme',
          component: Theme
        },
        {
          path: '/culture',
          name: 'Culture',
          component: Culture
        },
        {
          path: '/q1',
          name: 'Q1',
          component: Q1
        },
      ]
    },
  ]
}

