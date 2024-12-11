<script setup>
import { Monitor, Grid, UserFilled, Edit, Bell, Checked, List } from "@element-plus/icons-vue";
</script>

<template>
    <el-menu-item index="1">
        <template #title>
            <el-icon>
                <Monitor />
            </el-icon>
            <span>控制台</span>
        </template>
    </el-menu-item>
    <el-sub-menu index="2">
        <template #title>
            <el-icon>
                <Grid />
            </el-icon>
            <span>权限管理</span>
        </template>
        <el-menu-item>
            <el-icon><UserFilled /></el-icon>
            <span>账号管理</span>
        </el-menu-item>
        <el-menu-item>
            <el-icon><Edit /></el-icon>
            <span>菜单管理</span>
        </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
        <template #title>
            <el-icon><Bell /></el-icon>
            <span>DIDI陪诊</span>
        </template>
        <el-menu-item>
            <el-icon><Checked /></el-icon>
            <span>陪护管理</span>
        </el-menu-item>
        <el-menu-item>
            <el-icon><List /></el-icon>
            <span>订单管理</span>
        </el-menu-item>
    </el-sub-menu>
</template>