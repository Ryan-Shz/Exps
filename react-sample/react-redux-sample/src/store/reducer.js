const defaultState = {
  inputValue: "",
  todoList: [],
};

const func = (state = defaultState, action) => {
    let type = action.type;
    if (type === 'change_input_value') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if (type === 'add_todo_item') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.todoList.push(state.inputValue);
        return newState;
    }
    if (type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.todoList.splice(action.index, 1);
        return newState;
    }
    return state;
};

export default func;
