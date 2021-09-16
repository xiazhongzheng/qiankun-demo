// rescripts插件 修改react配置
module.exports = {
  webpack: (config) => {
    config.output.libraryTarget = 'umd'
    config.output.library = 'm-react'
    config.output.publicPath = '//localhost:30000/'
    return config
  },
  devServer: (config) => {
    config.headers = {
      'Access-Control-Allow-Origin': '*' // 允许跨域
    }
    return config
  }
}