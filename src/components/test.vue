<template>
    <el-button  @click="open">打开消息提示</el-button>
    <!-- <el-button :plain="true" @click="openVn" hidden>VNode</el-button> -->
  </template>
  
  <script>
    export default {
      methods: {
        open() {
          this.$message('+1');
        },
  
        
      }
    }
  </script>