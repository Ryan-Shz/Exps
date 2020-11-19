import React from "react";
import { connect } from "react-redux";

function TodoList(props) {
  let { inputValue, todoList, onChangeInputValue, onSubmit, onDelete } = props;
  return (
    <React.Fragment>
      <input value={inputValue} onChange={onChangeInputValue}></input>
      <button onClick={onSubmit}>submit</button>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onDelete(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInputValue(e) {
      let value = e.target.value;
      let action = {
        type: "change_input_value",
        inputValue: value,
      };
      dispatch(action);
    },
    onSubmit() {
      let action = {
        type: "add_todo_item",
      };
      dispatch(action);
    },
    onDelete(index) {
      let action = {
        type: "delete_item",
        index,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
