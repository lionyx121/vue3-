<script setup>
import { useRouterStore } from '@/stores/routeStore';
import { UserFilled } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import * as ElIcons from "@element-plus/icons-vue";

const routerStore = useRouterStore()
const dataList = ref([])

// 获取路由，监视它的fullPath，变化了就说明datalist的值要更新
const route = useRoute()
const router = useRouter()

watch(
    () => routerStore.routerList,
    () =>{
        dataList.value = routerStore.routerList
        // console.log("dataList", dataList.value)
    },
    { deep: true }
)

// 组件映射
const iconMapping = {
  Monitor: ElIcons.Monitor,
  Grid: ElIcons.Grid,
  UserFilled: ElIcons.UserFilled,
  Edit: ElIcons.Edit,
  Bell: ElIcons.Bell,
  Checked: ElIcons.Checked,
  List: ElIcons.List,
};

// 路由跳转
const goto = async (item) =>{
    await router.push(item.path)
    // console.log(route.fullPath)
}

// delcet函数
const handleDelect = (id) =>{
    // console.log("触发了:", id)
    dataList.value = dataList.value.filter(item => item.id !== id)
    routerStore.updateRouterList(dataList.value)
    if(dataList.value.length !== 0){
        router.push(dataList.value[dataList.value.length - 1].path)
    }else{
        router.push('/')
    }
}

</script>


<template>
    <div class="box">
        <div class="icon">
            <el-icon size="20">
                <Fold />
            </el-icon>
        </div>
        <div class="content">
            <div class="contentBox" v-for="item in dataList" :key="item.id" @click="goto(item)">
                <el-icon size="13" :class="{act: route.fullPath === item.path}">
                    <component :is="iconMapping[item.icon]"></component>
                </el-icon>
                <span :class="{act: route.fullPath === item.path}">{{ item.title }}</span>
                <el-icon class="closee" size="15" @click.stop="handleDelect(item.id)"><Close /></el-icon>
            </div>
        </div>
        <el-dropdown class="dropbox">
            <div class="el-dropdown-link userinfo">
                <el-icon class="el-icon--right useravater" size="20">
                    <UserFilled />
                </el-icon>
                admin
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>


<style scoped lang="scss">
.box {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        cursor: pointer;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon:hover {
        background-color: #f5f5f5;
    }

    .content {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .contentBox{
            width: 120px;
            height: 60px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            .closee{
                visibility: hidden;
            }
            .act{
                color: #007FFF;
            }
        }
        .contentBox:hover{
            background-color: #f5f5f5;
            .closee{
                visibility: inherit;
            }
        }
    }

    .dropbox {
        .userinfo {
            display: flex;
            align-items: center;
            width: 120px;

            .useravater {
                margin-right: 15px;
            }
        }
    }
}
</style>