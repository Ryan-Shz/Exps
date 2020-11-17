import React from "react";

// 导入css文件
import "./style.css";

import "./TodoItem";
import TodoItem from "./TodoItem";

// 定义一个组件
class TodoList extends React.Component {
  // 构造函数是固定写法
  constructor(props) {
    super(props);
    // 定义数据，必须放在状态中
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  render() {
    return (
      // React16开始引入Fragment
      // 使布局减少一层div嵌套，类似android中的merge标签
      <React.Fragment>
        {/* 点这个label时，htmlFor="textArea"可以让光标自动切换到input上，原始的html语法使用的是for */}
        <label htmlFor="textArea">任务名称:</label>
        <input
          id="textArea"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        <ul>
          {/* 在JSX中使用语句，并返回一个li */}
          {this.state.list.map((item, index) => {
            return (
              <div>
                {/* <li
                  key={index}
                  onClick={this.handleLiItemClick.bind(this, index)}
                  // 使用 dangerouslySetInnerHTML 来设置元素的 innerHtml 属性，可以item中的html标签也生效
                  // 比如 item 的值是 <h1>Hello</h1>
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li> */}
                <TodoItem item={item} index={index} itemClick={this.handleLiItemClick.bind(this)}/>
              </div>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  handleInputChange(e) {
    // 获取变化后的input框中的值
    console.log(e.target.value);
    // React 中不能直接通过this.state去修改页面数据
    // this.state.inputValue = e.target.value;
    // 必须通过 this.setState去修改
    this.setState({
      inputValue: e.target.value,
    });
  }

  // 添加一个任务到todo-list中
  handleButtonClick() {
    console.log("handle click");
    // 从 this.state中读取数据
    // 拷贝一个新的数组来修改，而不要使用原有的数组
    let list = [...this.state.list, this.state.inputValue];
    this.setState({
      list,
      inputValue: "",
    });
  }

  // 删除一个任务
  handleLiItemClick(index) {
    console.log(`item index is ${index}`);
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list,
    });
  }
}

export default TodoList;
