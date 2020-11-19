import * as actionTypes from './actionTypes';

export const createChangeFocusAction = (focused) => ({
    type: actionTypes.SEARCH_FOCUS_CHANGE,
    focused
})