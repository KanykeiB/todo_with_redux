import { FILTER_TODO } from "./types";

const filterTodoActionCreator = (filter) =>({
    type: FILTER_TODO,
    payload:filter
})


export{
    filterTodoActionCreator
}