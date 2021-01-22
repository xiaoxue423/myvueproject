import Vue from 'vue'
import VueRouter from 'vue-router'
import ManageFirst from "@/views/ManageFirst";
import NotFound from "@/views/NotFound";
import Projects from "@/views/Projects";
import PersonalCenter from "@/views/PersonalCenter";
import Machine from "@/views/Machine";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ManageFirst',
    component: ManageFirst
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/project',
    component: Projects
  },
  {
    path:'/machine',
    component: Machine
  },
  {
    path:'/personal',
    component: PersonalCenter
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
