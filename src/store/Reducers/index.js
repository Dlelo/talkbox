import { combineReducers } from 'redux';
import tokenReducer from '../Reducers/tokenReducer'

const rootReducer = combineReducers({
    token : tokenReducer,
});

export default rootReducer;