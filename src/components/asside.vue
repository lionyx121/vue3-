<script setup>
import etreeMenu from './etreeMenu.vue';
import { ref } from 'vue'

</script>

<template>
    <el-menu 
    active-text-color="#F5F6F6" 
    background-color="#545c64" 
    text-color="#fff" 
    class="asside-menu" 
    >
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