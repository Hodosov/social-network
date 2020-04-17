import React from 'react'
import { addPostActionCreator, 
    updateNewPostTextActionCreator } from '../../../redux/Profile-reducer'
import { Myposts } from './Myposts';


export const MypostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    } 

    let onPostChange = (text) =>{
       let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }



    return (
        <Myposts 
        updataNewpostText={ onPostChange } 
        addPost={ addPost } 
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
        
    )
}