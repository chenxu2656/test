<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @select="handleUpdate"
  >
    <el-menu-item index="frontDesk" @click="routerPush(router, '/ems')">
      <el-icon><img src="../../../public/images/icons/dashboard.svg" alt=""></el-icon>
      <template #title>EMS数据</template>
    </el-menu-item>
    <el-menu-item index="frontDesk" @click="routerPush(router, '/emi')">
      <el-icon><img src="../../../public/images/icons/frontend.svg" alt=""></el-icon>
      <template #title>EMI数据</template>
    </el-menu-item>
   
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { routerPush } from "../../js/index";
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute()
const isCollapse = ref(false);
const activePath = ref("home");
activePath.value = route.path.split('/admin/')[1] || 'home'
const handleUpdate = (index)=>{
  activePath.value = index
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-sub-menu {
  height: auto;
  
}
.el-icon{
    img{
      width: 20px;
      padding-right: 10px;
    }
  }

</style>
