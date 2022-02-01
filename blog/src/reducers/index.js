import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer  from "./usersReduser";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
