<script setup>
import asside from '@/components/asside.vue';
import myHeader from '@/components/myHeader.vue';
</script>

<template>
    <div class="common-layout">
        <el-container class="container">
            <asside></asside>
            <el-container>
                <el-header class="myHeader">
                    <myHeader></myHeader>
                </el-header>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.common-layout{
    height: 100%;
    background-color: #f5f5f5;
    .container{
        height: 100%;
        .myHeader{
            padding: 0;
            background-color: #fff;
        }
    }
}
</style>