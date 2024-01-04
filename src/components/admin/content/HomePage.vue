<template>
  <div id="headBar">
    <el-row :gutter="20">
      你好
    </el-row>
  </div>
  
</template>
<style lang="scss" scoped>
#headBar {
  margin-top: 20px;
  .el-row {
    .el-col {
      
      .grid-content {
        height: 100px;
        background-color: #15b7b9;
        border-radius: 5px;
        .title{
          display: flex;
          width: 40%;
          height: 100%;
          color: white;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 5px;
        }
      } 
      .write{
        background-color: $light_button_color;
        text-align: center;
        display: flex;
        justify-content: center;
      }                                      
    }
  }
}
#con{
  margin-top: 20px;
  .cont{
    height: 500px;
    border-radius: 5px;
    .tit{
      .titCon{
        
      }
    }
  }
}
</style>
<script setup>
</script>