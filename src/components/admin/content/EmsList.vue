<template>
  <el-card>
    <div id="but">
      <el-button type="primary" @click="createFieldVisible = true">
        <edit style="width: 1em; height: 1em; margin-right: 8px" />增加数据
      </el-button>
    </div>
    <el-table :data="folders" style="width: 100%">
      <template v-slot:empty>
        <EmptyDisplayVue />
      </template>
      <!-- <el-table-column type="selection" width="55" /> -->
      <el-table-column type="selection" width="55" />
      <el-table-column label="项目代号" prop="daihao" />
      <el-table-column label="产品型号" prop="xinghao" />
      <el-table-column label="封装/主频" prop="fengzhuang" />
      <el-table-column label="测试条件" prop="ceshi" />
      <el-table-column label="CD(Pass)" prop="cd" />
      <el-table-column label="AD(Pass)" prop="ad" />
      <el-table-column label="ESD Level" prop="esd" />
      <el-table-column label="EFT(Pass)" prop="eft" />
      <el-table-column label="测试人" prop="ceshiren" />

      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="search" />
        </template>
        <!-- <template #default="scope">
          <el-button size="small" @click="
            dialogFormVisible = true;
          folderId = scope.row._id;
          ">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template> -->
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="修改文件夹名字">
      <label class="fodlerName">FolderName</label>
      <el-input v-model="updateField.folderName" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="
            dialogFormVisible = false;
          handleUpdate(folderId, updateField);
          ">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="createFieldVisible" title="增加数据" id="createFolder">
      <el-form label-position="right" label-width="100px" >
        <el-form-item label="项目代号">
        <el-input v-model="createField.daihao" />
      </el-form-item>
        <el-form-item label="产品代号">
        <el-input v-model="createField.xinghao" />
      </el-form-item>
        <el-form-item label="封装/主频">
        <el-input v-model="createField.fengzhuang" />
      </el-form-item>
        <el-form-item label="测试条件" >
        <el-input v-model="createField.ceshi" />
      </el-form-item>
        <el-form-item label="CD(Pass)" >
        <el-input v-model="createField.cd" />
      </el-form-item>
        <el-form-item label="AD(Pass)" >
        <el-input v-model="createField.ad" />
      </el-form-item>
        <el-form-item label="ESD Level" >
        <el-input v-model="createField.esd" />
      </el-form-item>
        <el-form-item label="EFT(Pass)" >
        <el-input v-model="createField.eft" />
      </el-form-item>
        <el-form-item label="测试人" >
        <el-input v-model="createField.ceshiren" />
      </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="createFieldVisible = false">Cancel</el-button>
          <el-button type="primary" @click="
            createFieldVisible = false;
          handleCreate(createField);
          ">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
// import { formateCtime } from "../../../js/index.js";
import { em } from "../../../js/api/index";
import { Edit } from "@element-plus/icons-vue";
import EmptyDisplayVue from "./common/EmptyDisplay.vue";
const folders = ref([]);
const dialogFormVisible = ref(false);
const createFieldVisible = ref(false);
const updateField = reactive({
  folderName: "",
});
const createField = reactive({
  daihao: "",
  xinghao: "",
  fengzhuang: "",
  ceshi: "",
  cd: "",
  ad: "",
  esd: "",
  eft: "",
  ceshiren: ""
});
const folderId = reactive({});
const handleGetList = async () => {
  let resp = await em.emsList();
  folders.value = resp.data;
};
// const handleDelete = async (folderId) => {
//   const resp = await folder.folderDelete(folderId);
//   console.log(resp);
//   await handleGetList();
// };
// const handleUpdate = async (folderId, field) => {
//   const resp = await folder.folderNameUpdate(folderId, field);
//   console.log(resp);
//   updateField.folderName = ''
//   await handleGetList();
// };
const handleCreate = async (field) => {
  const resp = await em.createEms(field)
  console.log(resp);
  createField.folderName = ''
  await handleGetList();
}
onMounted(() => {
  handleGetList();
});
</script>
<style lang="scss" scoped>
.el-card {
  #but {
    text-align: right;

    .el-button {
      background-color: $button_color;
    }
  }

  .el-table {
    margin-top: 10px;

    #folderMa {
      display: flex;

      .el-menu {
        width: 10%;
      }

      #selectedList {
        flex-grow: 1;
        height: 200px;
      }
    }
  }
}
</style>