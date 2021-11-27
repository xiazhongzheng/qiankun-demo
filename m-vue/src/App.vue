<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/helloWorld">helloWorld</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import actions from "./shared/actions";
export default defineComponent({
  name: 'App',
  setup() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { userInfo } = state;
      console.log('userInfo', userInfo)
    }, false);
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
