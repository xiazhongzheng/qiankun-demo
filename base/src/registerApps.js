import { registerMicroApps, start } from 'qiankun'
const loader = (loading) => {
  console.log('loading', loading)
}
registerMicroApps(
  [
    {
      name: 'm-vue',
      entry: '//localhost:20000',
      container: '#container',
      activeRule: '/vue',
      loader,
    },
    {
      name: 'm-react',
      entry: '//localhost:30000',
      container: '#container',
      activeRule: '/react',
      loader,
    },
  ],
  {
    beforeLoad: () => {
      console.log('加载前')
    },
    beforeMount: () => {
      console.log('挂载前')
    },
    afterMount: () => {
      console.log('挂载前')
    },
    beforeUnmount: () => {
      console.log('销毁前')
    },
    afterUnmount: () => {
      console.log('销毁前')
    },
  }
)
start({
  sandbox: {
    // experimentalStyleIsolation: true, // 实验型的样式方案
    strictStyleIsolation: true, // 严格隔离
  }
})
