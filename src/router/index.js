import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: "JavaScript教程" },
    redirect: '/home/jsintroduce',
    children: [
      {
        path: 'jsintroduce',
        name: 'JsIntroduce',
        component: () => import('../views/home/jsintroduce/Jsintroduce.vue'),
        meta: { title: "JavaScript简介" },
        redirect: '/home/jsintroduce/whatjs',
        children:[
          {
            path: 'whatjs',
            name: 'WhatJs',
            component: () => import('../views/home/jsintroduce/WhatJs.vue'),
            meta: { title: "什么是JavaScript" },
          },
          {
            path: 'ecmascirpt',
            name: 'ECMAscirpt',
            component: () => import('../views/home/jsintroduce/ECMAscirpt.vue'),
            meta: { title: "ECMAscirpt" },
          },
          {
            path: 'dom',
            name: 'DOM',
            component: () => import('../views/home/jsintroduce/DOM.vue'),
            meta: { title: "DOM" },
          },
          {
            path: 'bom',
            name: 'BOM',
            component: () => import('../views/home/jsintroduce/BOM.vue'),
            meta: { title: "BOM" },
          }
        ]
      },
      {
        path: 'start',
        name: 'Start',
        component: () => import('../views/home/start/Start.vue'),
        meta: { title: "起步" },
        redirect: '/home/start/script',
        children:[
          {
            path: 'script',
            name: 'Script',
            component: () => import('../views/home/start/Script.vue'),
            meta: { title: "<script>元素" },
          },
          {
            path: 'grammar',
            name: 'Grammar',
            component: () => import('../views/home/start/Grammar.vue'),
            meta: { title: "语法" },
          },
          {
            path: 'typeof',
            name: 'TypeOf',
            component: () => import('../views/home/start/TypeOf.vue'),
            meta: { title: "数据类型" },
          },
          {
            path: 'operator',
            name: 'Operator',
            component: () => import('../views/home/start/Operator.vue'),
            meta: { title: "操作符" },
          },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})


export default router
