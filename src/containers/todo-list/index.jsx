import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/todo-item';
import { TYPE_OF_FILTER } from '../../redux/filter/reducers';
import { getActiveFilter } from '../../redux/filter/selectors';
import { deleteTodoActionCreator, toggleTodoActionCreator } from '../../redux/todo/actions';
import { getTodos } from '../../redux/todo/selectors';

const TodoListContainer = () => {
    const todos = useSelector(getTodos)
    const activeFilter = useSelector(getActiveFilter)
    const dispatch = useDispatch()
    const handleToggleTodo =(id)=>{
        dispatch(toggleTodoActionCreator(id))
    }
    const handleDeleteTodo =(id)=>{
        dispatch(deleteTodoActionCreator(id))
    }
    const filterTodos =(todos, filter) =>{
        switch (filter){
            case TYPE_OF_FILTER.SHOW_ALL:
                return todos
            case TYPE_OF_FILTER.SHOW_ACTIVE:
                return todos.filter(todo => todo.isComplete === false)
            case TYPE_OF_FILTER.SHOW_COMPLETE:
                return todos.filter(todo => todo.isComplete === true)
            default:
                return todos
        }
    }
    return (
        <ul>
            {filterTodos(todos, activeFilter).map((todo, idx)=>(
                <TodoItem 
                key={idx}
                text={todo.text}
                isComplete={todo.isComplete}
                onClick={()=> handleToggleTodo(todo.id)}
                onDelete={()=> handleDeleteTodo(todo.id)}
                />
            ))}
        </ul>
    );
};

export default TodoListContainer;
// ()=> handleDeleteTodo(todo.id)