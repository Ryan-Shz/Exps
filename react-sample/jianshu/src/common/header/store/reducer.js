import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// 使用 immutable.js 让 state 对象变为不可变对象，避免编码异常
const defaultState = fromJS({
  focused: false,
  list: [],
  isMouseEnter: false,
  pageIndex: 0,
  pageSize: 10,
  totalPageSize: 0,
});

const func = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS_CHANGE:
      // let newState = JSON.parse(JSON.stringify(state));
      // newState.focused = action.focused;
      // return newState;
      // immutable 对象的 set 方法会生成一个新的对象
      return state.set("focused", action.focused);
    case actionTypes.SEARCH_LIST_INIT:
      return state.merge({
        list: action.list,
        totalPageSize: Math.ceil(action.list.size / 10),
      });
    case actionTypes.SEARCH_INFO_MOUSE_CHANGE:
      return state.set("isMouseEnter", action.isEnter);
    case actionTypes.SEARCH_INFO_LIST_CHANGE:
      let index = state.get("pageIndex") + 1;
      let totalSize = state.get("totalPageSize");
      let size = state.get("pageSize");
      if (index + 1 === totalSize) {
        index = 0;
        size = state.get("list").size % 10;
      } else {
        size = 10;
      }
      return state.merge({
        pageIndex: index,
        pageSize: size,
      });
    default:
      return state;
  }
};

export default func;
