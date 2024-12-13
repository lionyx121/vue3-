<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
import { useRouterStore } from "@/stores/routeStore";

// Vue Router实例
const router = useRouter();
const route = useRoute();

// routerStore
const routeStore = useRouterStore()

// 动态生成菜单项的数据
const routerList = ref(router.options.routes[0].children || []);

// 图标映射表
const iconMapping = {
  Monitor: ElIcons.Monitor,
  Grid: ElIcons.Grid,
  UserFilled: ElIcons.UserFilled,
  Edit: ElIcons.Edit,
  Bell: ElIcons.Bell,
  Checked: ElIcons.Checked,
  List: ElIcons.List,
};

// 当前路径，用于高亮
const nowPath = ref(route.fullPath);

// 监听路由变化，自动更新当前路径
watch(
  () => route,
  () => {
    // console.log("route改变了:", route.fullPath)
    // console.log("fullpath:", route.fullPath)
    nowPath.value = route.fullPath;
  }, 
  {deep: true}
)

// 路由跳转
const goto = async (meta) => {
  await router.push(meta.path);
  if (meta.id === "734096433583") {
    return
  }
  routeStore.getRouterList(meta)
  // let list = routeStore.routerList
  // console.log("list:", list)
};
</script>

<template>
  <!-- 动态渲染路由菜单 -->
  <div v-for="(item, index) in routerList" :key="item.component.__hmrId">
    <!-- 单层菜单项 -->
    <el-menu-item v-if="!item.children" @click="goto(item.meta)" :index="(index + 1).toString()">
      <el-icon :class="{ activatee: nowPath === item.meta.path }">
        <component :is="iconMapping[item.meta.icon]" />
      </el-icon>
      <span :class="{ activatee: nowPath === item.meta.path }">
        {{ item.meta.title }}
      </span>
    </el-menu-item>

    <!-- 子菜单 -->
    <el-sub-menu v-else :index="(index + 1).toString()">
      <template #title>
        <el-icon>
          <component :is="iconMapping[item.meta.icon]" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>

      <!-- 子菜单项 -->
      <el-menu-item v-for="(child, childIndex) in item.children" :key="child.component.__hmrId"
        @click="goto(child.meta)" :index="(index + 1).toString() + '-' + (childIndex + 1).toString()">
        <el-icon :class="{ activatee: nowPath === child.meta.path }">
          <component :is="iconMapping[child.meta.icon]" />
        </el-icon>
        <span :class="{ activatee: nowPath === child.meta.path }">
          {{ child.meta.title }}
        </span>
      </el-menu-item>
    </el-sub-menu>
  </div>
</template>

<style scoped lang="scss">
/* 高亮样式 */
.activatee {
  color: #ffd04b;
}
</style>
