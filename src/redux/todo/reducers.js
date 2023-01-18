import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./types"

const initialState = []

const todoReducer =( state=initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    isComplete: action.payload.isComplete,
                    text: action.payload.text
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {
                ...todo,
                isComplete: !todo.isComplete
            } : todo)
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}
export default todoReducer