import  * as actionTypes from './actionTypes';

const defaultState = {
    focused: false,
}

const func = (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS_CHANGE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.focused;
        return newState;
    }
    return state;
}

export default func;