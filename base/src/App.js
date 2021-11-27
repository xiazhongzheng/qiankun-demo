import { BrowserRouter as Router, Link } from 'react-router-dom'
import actions from './shared/actions'
// import {login} from './apis/login'
function App() {
  // 注册一个观察者函数
  actions.onGlobalStateChange((state, prevState) => {
    // state: 变更后的状态; prevState: 变更前的状态
    console.log('主应用观察者：token 改变前的值为 ', prevState.userInfo.token)
    console.log(
      '主应用观察者：登录状态发生改变，改变后的 token 的值为 ',
      state.userInfo.token
    )
  })
  
  // setTimeout(() => {
  //   login()
  // }, 2000)

  return (
    <div className="App">
      {/* <button onClick={() => login()}>login</button> */}
      <Router>
        <Link to="/vue">vue app</Link>
        <Link to="/react">react app</Link>
      </Router>
      {/* 微应用渲染到container容器中 */}
      <div id="container"></div>
    </div>
  )
}

export default App
