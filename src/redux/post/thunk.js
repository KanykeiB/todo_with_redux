// const fetchPosts =() => {
//     return (dispatch) = () => {
//     }
// }

import { createPostFailureActionCreator, createPostReceiveActionCreator, createPostRequestActionCreator, deletePostFailureActionCreator, deletePostReceiveActionCreator, deletePostRequestActionCreator, getPostFailureActionCreator, getPostReceiveActionCreator, getPostRequestActionCreator, getPostsFailureActionCreator, getPostsReceiveActionCreator, getPostsRequestActionCreator, updatePostFailureActionCreator, updatePostReceiveActionCreator, updatePostRequestActionCreator } from "./actions"


const fetchPosts =() => async (dispatch) =>{
    dispatch(getPostsRequestActionCreator())
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const parseData = await res.json()
        setTimeout(()=>{
            dispatch(getPostsReceiveActionCreator(parseData))
        }, 2000)
    } catch (e){
        dispatch(getPostsFailureActionCreator(e))
    }
}

const fetchPostById =(id) => async (dispatch) =>{
    dispatch(getPostRequestActionCreator())
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const parseData = await res.json()
        setTimeout(()=>{
            dispatch(getPostReceiveActionCreator(parseData))
        }, 2000)
    } catch (e){
        dispatch(getPostFailureActionCreator(e))
    }
}
const updateRequest = {
    method: 'PUT',
    body: JSON.stringify({
    title: 'foo2',
    body: 'bar2',
    userId: 1,
}), 
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }}

const updatePostById =(id) => async (dispatch) =>{
    dispatch(updatePostRequestActionCreator())
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, updateRequest)
        const parseData = await res.json()
        setTimeout(()=>{
            dispatch(updatePostReceiveActionCreator(parseData))
        }, 2000)
    } catch (e){
        dispatch(updatePostFailureActionCreator(e))
    }
}

const createRequest = {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
}), 
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }}
const createPost =() => async (dispatch) =>{
    dispatch(createPostRequestActionCreator())
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', createRequest)
        const parseData = await res.json()
        setTimeout(() => {
            dispatch(createPostReceiveActionCreator(parseData))
        }, 2000)
    } catch (e){
        dispatch(createPostFailureActionCreator(e))
    }
}

const deletePostById =(id) => async (dispatch) =>{
    dispatch(deletePostRequestActionCreator())
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:'DELETE',
        })
        const parseData = await res.json()
        setTimeout(()=>{
            dispatch(deletePostReceiveActionCreator(parseData))
        }, 2000)
    } catch (e){
        dispatch(deletePostFailureActionCreator(e))
    }
}

export default {fetchPosts, fetchPostById, updatePostById, createPost, deletePostById }