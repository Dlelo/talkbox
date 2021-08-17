import { combineReducers } from 'redux';
import tokenReducer from '../Reducers/tokenReducer'
import chatsReducer from './chatsReducer';

const rootReducer = combineReducers({
    token : tokenReducer,
    chats : chatsReducer,
});

export default rootReducer;