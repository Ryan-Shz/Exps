// 使用Redux的步骤
// 1. 创建reducer
// 2. 创建store，将reducer传给它
import {createStore} from 'redux';
import reducer from './reducer'

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 用来使用chrome配合Redux DevTools调试Redux
// store必须是唯一的
// 只有store才能更新自己的state, reducer中不能改，只能拷贝修改
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;