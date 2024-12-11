import { createRouter, createWebHashHistory  } from 'vue-router'
import myMain from '@/views/myMain.vue'
import loginIndex from '@/views/login/loginIndex.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', 
      component: myMain,
    },
    {path: '/login', component: loginIndex}
  ],
})

export default router
