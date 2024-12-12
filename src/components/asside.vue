<script setup>
import etreeMenu from './etreeMenu.vue';

</script>

<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff" class="asside-menu">
        <p class="logo-header">TITI陪诊</p>
        <etreeMenu></etreeMenu>
    </el-menu>
</template>

<style scoped lang="scss">
.asside-menu {
    width: 200px;
    .logo-header {
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
    }
}
</style>