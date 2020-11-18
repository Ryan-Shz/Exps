// 用来管理所有action对象额创建

// 导入定义好的action type
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM } from "./actionTypes";

export const createInputChangeAction = (inputValue) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue
})

export const createAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const createDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})