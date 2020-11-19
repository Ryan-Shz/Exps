import { takeEvery, put } from "redux-saga/effects";
import { LOAD_TODO_ITEM } from "./actionTypes";

import axios from "axios";

function* mySaga() {
  yield takeEvery(LOAD_TODO_ITEM, loadTodoItem);
}

function* loadTodoItem() {
  try {
    let res = yield axios.get("/todo/list.json");
    let action = {
      type: LOAD_TODO_ITEM,
      todoList: res.data,
    };
    yield put(action);
  } catch (error) {
    console.log(error);
  }
}

export default mySaga;
