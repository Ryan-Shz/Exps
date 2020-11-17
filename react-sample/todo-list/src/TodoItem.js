import React from "react";
// 使用prop-types对props中的参数做校验
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    // 解构赋值 props 里的数据
    let { item, itemClick, index } = this.props;
    return (
      // 使用父组件传递过来的数据和方法
      <li
        onClick={() => {
          itemClick(index);
        }}
      >
        {/* 读取props中的值 */}
        {item}
      </li>
    );
  }
}

// 声明参数类型，如果类型传错会抛出警告
TodoItem.propTypes = {
  item: PropTypes.string.isRequired, // isRequired表示这个参数一定要传
  itemClick: PropTypes.func,
  index: PropTypes.number
} 

// 声明属性的默认值
TodoItem.defaultProps = {
  item: 'Yes'
}

export default TodoItem;
