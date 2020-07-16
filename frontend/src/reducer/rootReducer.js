import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';
import errorsReducer from './errors/errorsReducer';

const rootReducer = combineReducers({ users: usersReducer, error: errorsReducer });

export default rootReducer;