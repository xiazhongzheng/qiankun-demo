import { initGlobalState } from 'qiankun'

const initialState = { userInfo: {} }
const actions = initGlobalState(initialState)

export default actions
