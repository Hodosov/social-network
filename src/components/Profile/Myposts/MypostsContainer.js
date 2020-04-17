import React from 'react'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/Profile-reducer'
import { Myposts } from './Myposts';
import StoreContext from '../../../StoreContext';


export const MypostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <Myposts
                        updataNewpostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                )
            }}

        </StoreContext.Consumer>
    )
}