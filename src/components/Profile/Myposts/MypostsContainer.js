import React from 'react'
import { addPostActionCreator, 
    updateNewPostTextActionCreator } from '../../../redux/Profile-reducer'
import { Myposts } from './Myposts';


export const MypostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    } 

    let onPostChange = (text) =>{
       let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }



    return (
        <Myposts 
        updataNewpostText={ onPostChange } 
        addPost={ addPost } 
        posts={props.posts}
        newPostText={props.newPostText} />
        
    )
}