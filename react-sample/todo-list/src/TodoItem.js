import React from "react";

class TodoItem extends React.Component {
  render() {
    // 解构赋值 props 里的数据
    let { item, itemClick } = this.props;
    return (
      // 使用父组件传递过来的数据和方法
      <li
        onClick={() => {
          itemClick(this.props.index);
        }}
      >
        {/* 读取props中的值 */}
        {item}
      </li>
    );
  }
}

export default TodoItem;
