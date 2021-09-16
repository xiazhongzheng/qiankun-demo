import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

function render(props = {}) {
  let { container } = props
  ReactDOM.render(
    <App />,
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
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
export async function unmount(props = {}) {
  console.log('vue3 app unmount')
  let { container } = props
  ReactDOM.unmountComponentAtNode(
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
}


