import { combineReducers }  from 'redux-immutable';
import { reducer as headerReducers } from '../common/header/store';

export default combineReducers({
    header: headerReducers
});