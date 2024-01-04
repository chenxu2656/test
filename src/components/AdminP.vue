<template>
  <el-container>
    <el-header>
      <!-- <div id="title" class="topbarCon">EMC测试数据库</div> -->
      <div id="name" class="topbarCon">EMC测试数据库</div>
      <div id="logout" class="logout" @click="logout()">退出登陆</div>
    </el-header>
    <el-container id="con">
      <el-aside class="el-aside"> <side-menu-bar  /></el-aside>
      <el-main class="el-main">
        <router-view></router-view
      ></el-main>
    </el-container>
    <el-footer>EMC测试数据库</el-footer>
  </el-container>
</template>
<script setup>
import SideMenuBar from "../components/admin/SideMenuBar.vue";
import { useRouter } from "vue-router";
let router = useRouter()
const logout = ()=>{
  localStorage.removeItem('token')
  router.push({ path: '/login/in' })
}
</script>
<style lang="scss" scoped>

.el-header {
  border-bottom: 1px solid gainsboro;
  display: flex;
  height: 60px;
  background-color: $height_color;
  color: white;
  justify-content: space-between;
  .topbarCon {
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
  }
  .logout {
    height: 100%;
    line-height: 60px;
    color: #cd4277;
    cursor: pointer;
  }
}
#con{
  height: calc(100vh - 120px);
  .el-aside {
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #dddfe5;
  &::-webkit-scrollbar{
    display: none;
  }
}
}

.el-footer {
  border-top: 1px solid #dddfe5;
  bottom: 0px;
  height: 60px;
  text-align: center;
}

</style>