// 用来管理所有action对象额创建

// 导入axios来执行http请求
import axios from "axios";

// 导入定义好的action type
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, LOAD_TODO_ITEM } from "./actionTypes";

export const createInputChangeAction = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const createAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const createDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});

// 使用Redux-Thunk这个中间件，使得action可以是个函数
// 把这个函数给store.dispatch，就会被自动调用
export const createLoadTodoListAction = () => {
  return (dispatch) => {
    axios
      .get("/todo/list")
      .then((response) => {
        let action = {
            type: LOAD_TODO_ITEM,
            todoList: response.data
        }
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
