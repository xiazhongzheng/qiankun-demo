module.exports = {
  publicPath: '//localhost:20000', // 保证子应用从20000端口请求静态资源
  devServer: {
    port: 20000, // fetch
    headers : {
      'Access-Control-Allow-Origin': '*' // 允许跨域
    }
  },
  configureWebpack: {
    output: {
      libraryTarget: 'umd', // 用umd格式打包，可以挂载在window上，名字叫m-vue
      library: 'm-vue'
    }
  }
}
