// reducer 负责管理 store 里的所有数据
// 数据保存在 state 对象中

// 导入定义好的action type
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, LOAD_TODO_ITEM } from "./actionTypes";

const defaultState = {
  inputValue: "",
  todoList: [],
};

// 必须是个纯函数，不能有副作用
const func = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝state，不能去修改它！
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(state.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    let index = action.index;
    newState.todoList.splice(index, 1);
    return newState;
  }
  if (action.type === LOAD_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.todoList;
    return newState;
  }
  return state;
};

// 导出函数
export default func;
