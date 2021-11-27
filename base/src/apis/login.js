import actions from '../shared/actions'

const getUserInfo = async () => {
  return Promise.resolve({
    data: {
      token: '1234-' + new Date().toLocaleString(),
      username: 'zhangsan',
      userId: '1234321',
    },
  })
}

const login = async () => {
  const result = await getUserInfo()
  const userInfo = result.data
  // 应该在子应用加载完成后，变更主应用的状态
  actions.setGlobalState({ userInfo })
}
export {
  login
}
