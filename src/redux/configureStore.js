import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./filter/reducers";
import todoReducer from "./todo/reducers";
import thunk from "redux-thunk"
import postsReducer from "./post/reducers";

const rootReducer = combineReducers({
    todos: todoReducer,
    activeTodoFilter: filterReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))