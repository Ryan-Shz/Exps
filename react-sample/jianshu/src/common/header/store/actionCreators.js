import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

const createInitSearchInfoList = (list) => ({
    type: actionTypes.SEARCH_LIST_INIT,
    list: fromJS(list)
});

export const createChangeFocusAction = (focused) => ({
    type: actionTypes.SEARCH_FOCUS_CHANGE,
    focused
});

export const createChangeMouseEnterAction = () => ({
    type: actionTypes.SEARCH_INFO_MOUSE_CHANGE,
    isEnter: true
});

export const createChangeMouseLeaveAction = () => ({
    type: actionTypes.SEARCH_INFO_MOUSE_CHANGE,
    isEnter: false
});

export const createChangeSearchListChangeAction = () => ({
    type: actionTypes.SEARCH_INFO_LIST_CHANGE,
});

export const loadSearchInfoItems = () => {
    return (dispatch) => {
        axios.get('/api/list')
        .then((res) => {
            let data = res.data;
            if (data.code == 0) {
                let list = data.data;
                dispatch(createInitSearchInfoList(list));
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
}