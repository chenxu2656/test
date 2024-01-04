
<template>
  <el-card>
    <div id="but">
      <el-button type="primary" @click="createFieldVisible = true">
        <edit style="width: 1em; height: 1em; margin-right: 8px" />增加数据
      </el-button>
    </div>
    <el-table :data="filterTableData" style="width: 100%">
      <template v-slot:empty>
        <EmptyDisplayVue />
      </template>
      <el-table-column label="项目代号" prop="daihao" />
      <el-table-column label="产品型号" prop="xinghao" />
      <el-table-column label="标封装/主频" prop="fengzhuang" />
      <el-table-column label="0.15-30MHz dBuV" prop="dbuv15" />
      <el-table-column label="30-130MHz dBuV" prop="dbuv30" />
      <el-table-column label="130MHz-1GHz dBuV" prop="dbuv130" />
      <el-table-column label="1-3GHz dBuV" prop="dbuv3g" />
      <el-table-column label="限值dBuV" prop="xianzhidbuv" />
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
        <el-form-item label="0.15-30MHz dBuV" >
        <el-input v-model="createField.dbuv15" />
      </el-form-item>
        <el-form-item label="30-130MHz dBuV" >
        <el-input v-model="createField.dbuv30" />
      </el-form-item>
        <el-form-item label="130MHz-1GHz dBuV" >
        <el-input v-model="createField.dbuv130" />
      </el-form-item>
        <el-form-item label="1-3GHz dBuV" >
        <el-input v-model="createField.dbuv3g" />
      </el-form-item>
        <el-form-item label="限值dBuV" >
        <el-input v-model="createField.xianzhidbuv" />
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
import { onMounted, reactive, ref,computed } from "vue";
// import { formateCtime } from "../../../js/index.js";
import { em } from "../../../js/api/index";
import { Edit } from "@element-plus/icons-vue";
import EmptyDisplayVue from "./common/EmptyDisplay.vue";
const tableData = ref([]);
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
  let resp = await em.emiList();
  tableData.value = resp.data;
};

const search = ref('')
const filterTableData = computed(() =>
  tableData.value?
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.daihao.toLowerCase().includes(search.value.toLowerCase())
  ): ''
)

const handleCreate = async (field) => {
  const resp = await em.createEmi(field)
  console.log(resp);
  createField.folderName = ''
  await handleGetList();
}
onMounted(async () => {
  await handleGetList();
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