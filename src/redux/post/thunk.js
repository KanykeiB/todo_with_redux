// const fetchPosts =() => {
//     return (dispatch) = () => {
//     }
// }

import { getPostFailureActionCreator, getPostReceiveActionCreator, getPostRequestActionCreator, getPostsFailureActionCreator, getPostsReceiveActionCreator, getPostsRequestActionCreator } from "./actions"


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

export default {fetchPosts, fetchPostById}