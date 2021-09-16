## 主应用
#### 主应用的APP中写一个放置微应用的容器
#### registerMicroApps 注册微应用
#### start 开启qiankun

## 子应用
#### 项目设置
###### 设置publicPath 保证子应用从20000端口请求静态资源
###### 设置端口
###### 设置允许跨域
###### 用umd格式打包，可以挂载在window上，名字叫m-vue
#### 暴露接入协议
###### 生命周期 bootstrap mount unmount
###### qiankun在window上自带__POWERED_BY_QIANKUN__变量，如果有该变量，则在mount中挂载子应用。如果没有该变量，正常挂载

## 样式隔离
#### 子应用样式隔离：采用动态样式表，加载的时候添加样式，卸载的时候删除样式
#### 主应用和子应用的样式隔离：
###### BEM规范 （不方便）
###### css-modules css模块，动态生成一个前缀。（不是完全隔离）base项目开启qiankun的时候，使用沙箱 sandbox 的 experimentalStyleIsolation 模式
###### shadowDOM （完全隔离） 使用沙箱 sandbox的strictStyleIsolation 模式

## js隔离
#### 微应用会挂载在window上，所以window会被污染
#### js沙箱