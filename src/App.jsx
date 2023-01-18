import React from 'react';
import './App.css';
import AddTodoContainer from './containers/add-todo';
import FilterButtons from './containers/filter-buttons';
import TodoListContainer from './containers/todo-list';

function App() {
  return (
    <div className="App">
      <p className='LOGO'>TODO</p>
      <AddTodoContainer/>
      <TodoListContainer/>
      <FilterButtons/>
    </div>
  );
}

export default App;
