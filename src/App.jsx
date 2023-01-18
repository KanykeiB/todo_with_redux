import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import AddTodoContainer from './containers/add-todo';
import FilterButtons from './containers/filter-buttons';
import TodoListContainer from './containers/todo-list';
import fetchPosts from './redux/post/thunk';
import postOpeartions from './redux/post/thunk'

function App() {
  const posts = useSelector(state=> state.posts.list)
  const post = useSelector(state => state.posts.data)
  const dispatch = useDispatch()
  const {fetchPosts, fetchPostById} = postOpeartions
  useEffect(()=>{
    dispatch(postOpeartions.fetchPosts())
  }, [])
  useEffect(()=>{
    dispatch(postOpeartions.fetchPostById(2))
  }, [])
  console.log(post)
  console.log(posts)
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
