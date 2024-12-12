<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from 'vue';
import * as ElIcons from '@element-plus/icons-vue';

// 获取router里面的信息来渲染页面
const router = useRouter();
const routerList = ref([]);

// 从 router 中获取子路由并存储在 routerList 中
routerList.value = router.options.routes[0].children;
// console.log(routerList.value)

// 创建一个映射，动态加载对应的图标组件
const iconMapping = {
    Monitor: ElIcons.Monitor,
    Grid: ElIcons.Grid,
    UserFilled: ElIcons.UserFilled,
    Edit: ElIcons.Edit,
    Bell: ElIcons.Bell,
    Checked: ElIcons.Checked,
    List: ElIcons.List
};

// 判断当前页面选中的谁，使其变色
const nowPath = ref('')
const route = useRoute()
nowPath.value = route.fullPath
// console.log(nowPath.value)

// 路由跳转
const goto = async (path) => {
    await router.push(path)
    console.log("route:", route)
    nowPath.value = route.fullPath
    // console.log(nowPath.value)
}

const handleOpen = () => {
    console.log('出发了')
}

</script>

<template>
    <!-- 动态渲染路由的菜单项 -->
    <div v-for="(item, index) in routerList" :key="item.component.__hmrId">
        <el-menu-item v-if="!item.children" @click="goto(item.meta.path)" :index="(index + 1).toString()">
            <template #title>
                <el-icon :class="{ activatee: nowPath === item.meta.path }">
                    <!-- 动态渲染图标，根据 item.meta.icon 对应的组件 -->
                    <component :is="iconMapping[item.meta.icon]"></component>
                </el-icon>
                <span @click="goto(item.meta.path)" :class="{ activatee: nowPath === item.meta.path }">
                    {{ item.meta.title }}
                </span>
            </template>
        </el-menu-item>
        <el-sub-menu :index="(index + 1).toString()" v-else>
            <template #title>
                <div @click="goto(item.meta.path)" style="width: 100%;height: 100%;">
                    <el-icon>
                        <component :is="iconMapping[item.meta.icon]"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </div>
            </template>
            <el-menu-item v-for="myItem in item.children" :key="myItem.component.__hmrId"
                @click="goto(myItem.meta.path)">
                <el-icon :class="{ activatee: nowPath === myItem.meta.path }">
                    <component :is="iconMapping[myItem.meta.icon]"></component>
                </el-icon>
                <span :class="{ activatee: nowPath === myItem.meta.path }">
                    {{ myItem.meta.title }}
                </span>
            </el-menu-item>
        </el-sub-menu>
    </div>
</template>

<style scoped lang='scss'>
.activatee {
    color: #ffd04b;
}
</style>