import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRouterStore = defineStore('routeee', () => {
    const routerList = ref([])
    const getRouterList = (newObj) =>{
      let isExit = routerList.value.some(item => item.id === newObj.id)
      if(!isExit){
        routerList.value.push(newObj)
      }
    }
    const updateRouterList = (newArr) =>{
      routerList.value = newArr
    }
    return{
      routerList,
      getRouterList,
      updateRouterList
    }
})
