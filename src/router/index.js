import { createRouter, createWebHashHistory  } from 'vue-router'
import myMain from '@/views/myMain.vue'
import loginIndex from '@/views/login/loginIndex.vue'
import myConsole from '@/views/myConsole/index.vue'
import rights from '@/views/rights/index.vue'
import account from '@/views/account/index.vue'
import menu from '@/views/menu/index.vue'
import brand from '@/views/brand/index.vue'
import accompany from '@/views/accompany/index.vue'
import orders from '@/views/orders/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', 
      component: myMain,
      redirect: '/console',
      children:[
        {path: '/console', component: myConsole, meta: {title: '控制台', icon: 'Monitor', path: '/console', id: '734096433583'}},
        {
          path: '/rights',
          component: rights,
          redirect: '/account',
          meta: {title: '权限管理', icon: 'Grid', path: '/rights', id: '734096433584'},
          children:[
            {path: '/account', component: account, meta: {title: '账号管理', icon: 'UserFilled', path: '/account', id: '734096433585'}},
            {path: '/menu', component: menu, meta: {title: '菜单管理', icon: 'Edit', path: '/menu', id: '734096433586'}},
          ]
        },
        {
          path: '/brand',
          component: brand,
          redirect: '/accompany',
          meta: {title: 'DIDI陪诊', icon: 'Bell', path: '/brand', id: '734096433587'},
          children:[
            {path: '/accompany', component: accompany, meta: {title: '陪护管理', icon: 'Checked', path: '/accompany', id: '734096433588'}},
            {path: '/orders', component: orders, meta: {title: '订单管理', icon: 'List', path: '/orders', id: '734096433589'}},
          ]
        },
      ]
    },
    {path: '/login', component: loginIndex}
  ],
})

export default router
