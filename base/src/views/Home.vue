<template>
  <div class="home">
    主应用（主页）
    <h2 class="testText">测试文本</h2>
  </div>
</template>

<script>
import {initGlobalState} from 'qiankun'
const actions = initGlobalState({username:"Arya"})
actions.onGlobalStateChange((state,prev)=> {
  console.log("新值：",state);
  console.log("旧值：",prev)
},true)
export default {
  name: 'Home'
}
</script>
<style scoped>
.testText {
  color: red;
}
</style>
