import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Boys from '@/components/boys'
// import List from '@/components/List'
const Boys = () => import(/*webpackChunkName: "Boys"*/'@/components/home/boys');
const Girls = () => import(/*webpackChunkName: "Girls"*/'@/components/home/girls');
const List = () => import(/*webpackChunkName: "List"*/'@/components/List');
import StartPage from '@/components/StartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/boys',
      name: 'boys',
      component: Boys
    },
    {
      path: '/girls',
      name: 'girls',
      component: Girls
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
