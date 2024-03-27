<template>
  <div>
    <h1>敲赛博木鱼 赛博功德+1</h1>
    <br>
    <p class="h2">赛博功德：{{ gd }}</p>
    <br>
    <!-- <button type="button" class="btn btn-success" @click="gongdejiayi();open()">我敲</button> -->&nbsp;&nbsp;&nbsp;
    <el-button :plain="true" @click="open">我敲</el-button>&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-warning" @click="gongdeqingling()">一键重开</button>&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-danger" id="show-modal" @click="yijianchengfo();showModal = true">一键成佛</button>
  </div>
  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3 id="tanchuang">赛博木鱼温馨提示</h3>
      </template>
    </modal>
  </Teleport>
  
</template>

<script lang="ts" setup name="gongde+1">
import {ref,watch} from 'vue';
import Modal from './Modal.vue';
import { ElMessage } from 'element-plus';


let gd = ref(0)
let version = ref('Version 1.0.1')
let show = ref(false)

const showModal = ref(false)
//功德+1
function gongdejiayi(){
  gd.value += 1
}

//+1弹窗
const open = () => {
  ElMessage({
    message:"功德+1",
    type:"success"
  })
  gd.value += 1
}

//清零功德
function gongdeqingling(){
  gd.value = 0
}

//一键+10086
function yijianchengfo(){
  gd.value += 10086
  //alert("恭喜你，你已经成佛了！")
}

// watch(gd,()=>{
//   if(gd.value >= 20173){
//     alert('恭喜你，你已成佛了!')
//   }
// })

// let audio = ref();
// const plays = () => {
//   if (audio.value) {
//     audio.value.play();
//   }
// };
// const clickAudio = () => {
//   plays();
//   gd.value += 1

// };

</script>

<style>
.bianse{
  text-align: center;
  background-color: aqua;
  width: 1000px;
  height:200px;
}
.niceButton4{
    background-color: skyblue;
    border: none;
    border-radius: 12px;
    color:white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
  }
.niceButton4:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,.24),
    0 17px 50px 0 rgba(0,0,0,.19);
}
#tanchuang{
  color: red;
  font-size: 20px;
  font-weight: bold;
}
body{
  text-align: center;
}
</style>