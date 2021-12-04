import { combineReducers } from "redux";
import project from './project';
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    project,
    postReducer
});

export default rootReducer;