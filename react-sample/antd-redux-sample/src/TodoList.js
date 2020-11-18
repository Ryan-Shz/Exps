import React from "react";
// 使用antd必须导入css文件，否则antd的样式不生效
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
// 导入redux的store对象
import store from "./store";
import {createInputChangeAction, createAddTodoItemAction, createDeleteItemAction} from './store/actionCreators'

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
      <div style={{ marginTop: 10, marginLeft: 10 }}>
        <Input
          value={this.state.inputValue}
          onChange={this.onInputChange}
          placeholder="Basic usage"
          style={{ width: 300, padding: 5, marginRight: 5 }}
        />
        <Button
          type="primary"
          onClick={this.submit}
          style={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          Submit
        </Button>
        <List
          size="small"
          bordered
          style={{
            marginTop: 5,
          }}
          dataSource={this.state.todoList}
          renderItem={(item, index) => (
            <List.Item onClick={this.onDeleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
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
}

export default TodoList;
