import { combineReducers }  from 'redux';
import { reducer as headerReducers } from '../common/header/store';

export default combineReducers({
    header: headerReducers
});