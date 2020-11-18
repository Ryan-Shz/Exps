// 使用Redux的步骤
// 1. 创建reducer
// 2. 创建store，将reducer传给它
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// 引入redux-saga中间件
import thunk from "redux-thunk";
// 引入redux-saga中间件
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()

// 创建一个合并中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 用来使用chrome配合Redux DevTools调试Redux
// store必须是唯一的
// 只有store才能更新自己的state, reducer中不能改，只能拷贝修改
const store = createStore(reducer, enhancer);

sagaMiddleware.run(sagas);

export default store;