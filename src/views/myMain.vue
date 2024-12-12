<script setup>
import asside from '@/components/asside.vue';
</script>

<template>
    <div class="common-layout">
        <el-container class="container">
            <asside></asside>
            <el-container>
                <el-header>Header</el-header>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.common-layout{
    height: 100%;
    .container{
        height: 100%;
    }
}
</style>