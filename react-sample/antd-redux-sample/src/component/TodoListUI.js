import React from 'react';

// 使用antd必须导入css文件，否则antd的样式不生效
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

// 这是一个无状态组件，可以用一个函数表示
// 这是一个UI组件，只负责UI的绘制，也叫傻瓜组件
function TodoListUI(props) {
    return (
        <div style={{ marginTop: 10, marginLeft: 10 }}>
        <Input
          value={props.inputValue}
          onChange={props.onInputChange}
          placeholder="input what you want to do."
          style={{ width: 300, padding: 5, marginRight: 5 }}
        />
        <Button
          type="primary"
          onClick={props.onSubmit}
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
            width: 300
          }}
          dataSource={props.todoList}
          renderItem={(item, index) => (
            <List.Item onClick={() => {props.onDeleteItem(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
}

export default TodoListUI;