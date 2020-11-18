import React from "react";
import TodoItem from "./TodoItem";
// 导入css文件一般放到最后
import "./style.css";

// 定义一个组件
class TodoList extends React.Component {
  // 构造函数是固定写法
  constructor(props) {
    super(props);
    // 定义数据，必须放在state中
    this.state = {
      inputValue: "",
      list: [],
    };

    // 进阶：
    // 1. 当组件的state或者props发生改变时，render函数就会重新执行
    // 2. 当父组件的render函数被执行时，子组件的render函数也会重新执行

    // 将函数的this绑定提前可以优化页面性能
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleLiItemClick = this.handleLiItemClick.bind(this);
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
          onChange={this.handleInputChange}
          // 使用ref可以获取到对应的dom元素来操作，但不推荐
          // 因为setState是一个异步函数，我们直接使用ref去操作dom元素可能并不是最新的
          // 我们应该更多的使用数据驱动的形式
          ref={(input) => {
            this.input = input;
          }}
        />
        <button onClick={this.handleButtonClick}>提交</button>
        <ul>{this.getItems()}</ul>
      </React.Fragment>
    );
  }

  getItems() {
    return this.state.list.map((item, index) => {
      return (
        // 列表中的key需要加载每个item的最外层，且不要用index
        <div key={item}>
          {/* 在JSX中使用语句，并返回一个li */}
          {/* <li
            key={index}
            onClick={this.handleLiItemClick.bind(this, index)}
            // 使用 dangerouslySetInnerHTML 来设置元素的 innerHtml 属性，可以item中的html标签也生效
            // 比如 item 的值是 <h1>Hello</h1>
            dangerouslySetInnerHTML={{ __html: item }}
          ></li> */}

          {/* 
            1. 需要注意的是：React中的数据是单向数据流，父组件传递给子组件的数据仅仅是可读的
            2. 也就是说，子组件使用父组件传递的数据时不能去修改
          */}
          <TodoItem
            item={item}
            index={index}
            itemClick={this.handleLiItemClick}
          />
        </div>
      );
    });
  }

  handleInputChange(e) {
    // 通过e.target获取到产生事件的元素，是个DOM节点
    console.log(e.target);
    // 获取变化后的input框中的值
    // React中不要直接通过this.state去修改状态数据
    // this.state.inputValue = e.target.value;
    // 应该通过 this.setState去修改
    // React16之后推荐在setState后传入返回新state对象的函数，因为setState是一个异步函数！
    // setState有两个函数类型的参数，第二个是异步完成后的回调
    this.setState(
      () => ({
        inputValue: e.target.value,
      }),
      () => {
        console.log("setState is execute complete.");
      }
    );
  }

  // 添加一个任务到todo-list中
  handleButtonClick() {
    console.log("handle click");
    // setState传入的函数有一个prevState参数, 表示之前的状态
    this.setState((prevState) => {
      // 从prevState中读取数据
      // 拷贝一个新的数组来修改，而不要使用原有的数组
      let list = [...prevState.list, prevState.inputValue];
      return {
        list,
        inputValue: "",
      };
    });
  }

  // 删除一个任务
  handleLiItemClick(index) {
    console.log(`item index is ${index}`);
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });
  }

  // 生命周期函数
  // 在组件即将挂载前调用
  // 在React16开始已被废弃
  UNSAFE_componentWillMount(){
    console.log('componentWillMount');
  }

  // 组件被挂载到页面后执行
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 组件Props更新时调用
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // 组件被更新之前执行
  // 返回组件是否需要被更新，如果返回false，后面的生命周期函数将不会再被调用
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 组件即将被刷新之前调用
  // 是否调用取决于shouldComponentUpdate的返回结果
  // 在React16开始已被废弃
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件刷新完成后调用
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 当组件即将从dom中移除时调用
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default TodoList;
