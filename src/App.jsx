import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import AddTodoContainer from './containers/add-todo';
import FilterButtons from './containers/filter-buttons';
import TodoListContainer from './containers/todo-list';
import postOperations from './redux/post/thunk'
import { useForm } from 'react-hook-form';
import FormModule from './containers/form';

function App() {
  const posts = useSelector(state=> state.posts.list)
  const post = useSelector(state => state.posts.data)
  const createdPost = useSelector(state => state.posts.data)
  const updateStatus = useSelector(state => state.posts)
  const deleteStatus = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const {fetchPosts, fetchPostById, updatePostById, createPost, deletePostById} = postOperations

  useEffect(()=>{
    // dispatch(postOpeartions.fetchPosts())
    // dispatch(postOpeartions.fetchPostById(2))
    // dispatch(postOperations.createPost())
    // dispatch(postOperations.updatePostById(2))
    // dispatch(postOperations.deletePostById(3))
  }, [])
  
// console.log(posts)
// console.log(post)
// console.log(createdPost, 'create')
// console.log(updateStatus, 'update')
// console.log(deleteStatus, 'delete')

  return (
    <div className="App">
      <p className='LOGO'>TODO</p>
      <AddTodoContainer/>
      <TodoListContainer/>
      <FilterButtons/>
      {/* <FormModule/> */}
    </div>
  );
}

export default App;
