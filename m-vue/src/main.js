import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import routes from './router'

// 不能直接挂载，需要在主应用切换的时候，调用mount的时候挂载
// createApp(App).mount('#app')
let history
let router
let app
function render (props = {}) {
  history = createWebHistory('/vue')
  router = createRouter({
    history,
    routes
  })
  app = createApp(App)
  let {container} = props
  console.log('container', container)
  app.use(router).mount( container ? container.querySelector('#app') : '#app')
}


if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 暴露接入协议
export async function bootstrap() {
  console.log('vue3 app bootstrap')
}
export async function mount(props) {
  console.log('vue3 app mount', props)
  render(props)
}
export async function unmount() {
  console.log('vue3 app unmount')
  history = null
  router =  null
  app = null
}