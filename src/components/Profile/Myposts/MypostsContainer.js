import React from 'react'
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/Profile-reducer'
import { Myposts } from './Myposts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updataNewpostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => dispatch(addPostActionCreator())
    }
}

export const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)