import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./filter/reducers";
import todoReducer from "./todo/reducers";

const rootReducer = combineReducers({
    todos: todoReducer,
    activeTodoFilter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())