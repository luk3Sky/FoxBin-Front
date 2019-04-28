import { combineReducers } from "redux";
import auth from './auth';
import error from './error';
import message from './message';
import blog from './blog';

export default combineReducers({
    blogReducer: blog,
    errorReducer: error,
    messageReducer: message,
    authReducer: auth
});