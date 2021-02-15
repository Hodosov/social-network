import {
    addPostActionCreator,
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
        addPost: (AddNewPostForm) => dispatch(addPostActionCreator(AddNewPostForm))
    }
}

export const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)