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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import SignIn from './containers/signIn';

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
      <Tabs centered >
        <Tab label="Home" to='/' component={Link} />
        <Tab label="Sign In" to='/signIn' component={Link} />
        <Tab label="Sign Up" to='/signUp' component={Link} />
      </Tabs>
        <Switch>
          <Route exact path='/'>
            <AddTodoContainer/>
            <TodoListContainer/>
            <FilterButtons/>
          </Route>
          <Route exact path='/signUp'>
            <FormModule/>
          </Route>
          <Route exact path='/signIn'>
            <SignIn/>
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;

// {"data":
// [
//   {"id":1,"attributes":
//     {"name":"Lord","animal":"Dog","breed":"Labrador","location":"Bishkek","age":2,"sex":"Male","createdAt":"2023-01-22T04:48:43.056Z","updatedAt":"2023-01-22T04:48:55.602Z","publishedAt":"2023-01-22T04:48:55.600Z"}},
//   {"id":2,"attributes":
//     {"name":"Koko","animal":"Cat","breed":"SomeCat","location":"Paris","age":3,"sex":"Female","createdAt":"2023-01-22T06:41:57.601Z","updatedAt":"2023-01-22T06:41:57.601Z","publishedAt":"2023-01-22T06:41:57.598Z"}},
//   {"id":3,"attributes":
//     {"name":"Check","animal":"Bird","breed":"Some","location":"Bishkek","age":4,"sex":"Male","createdAt":"2023-01-22T13:08:19.640Z","updatedAt":"2023-01-22T13:08:19.640Z","publishedAt":"2023-01-22T13:08:19.636Z"}}],
//     "meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":3}}}
