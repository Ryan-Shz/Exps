import React from "react";
// 导入redux的store对象
import store from "../store";
// 导入UI组件
import TodoListUI from "./TodoListUI";
import {
  createInputChangeAction,
  createAddTodoItemAction,
  createDeleteItemAction,
  createLoadTodoListAction
} from "../store/actionCreators";

// 这是一个容器组件，控制组件的逻辑，不负责UI绘制，所以也叫聪明组件
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 当store中的数据发生改变时触发此回调
    store.subscribe(() => {
      // 将当前的state更改为最新的state
      this.setState(() => store.getState());
    });
  }

  render() {
    return (
      <TodoListUI
        todoList={this.state.todoList}
        inputValue={this.state.inputValue}
        onInputChange={this.onInputChange.bind(this)}
        onSubmit={this.submit.bind(this)}
        onDeleteItem={this.onDeleteItem.bind(this)}
      />
    );
  }

  onInputChange(e) {
    let value = e.target.value;
    // 构建action对象
    let action = createInputChangeAction(value);
    // 将action传给store
    store.dispatch(action);
  }

  submit(e) {
    let action = createAddTodoItemAction();
    store.dispatch(action);
  }

  onDeleteItem(index) {
    let action = createDeleteItemAction(index);
    store.dispatch(action);
  }

  componentDidMount() {
    // loadWithReduxThunk();
  }

  loadWithReduxThunk() {
    let action = createLoadTodoListAction();
    store.dispatch(action);
  }

}

export default TodoList;
