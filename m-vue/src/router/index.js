import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "helloWorld"*/ '../components/HelloWorld.vue')
  }
]
export default routes