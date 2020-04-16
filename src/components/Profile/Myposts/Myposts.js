import React from 'react'
import Post from './post/Post'
import styled from 'styled-components';

const Textrea = styled.textarea`
    resize: none;
    width: 520px;
    height: 60px;
    border: solid;
    border-radius: 10px;
    border-color: #C9F4F1;
`

const PostsCollumn = styled.div`
    display: flex;
    flex-direction: column-reverse;
`
export const Myposts = (props) => {
    let post = props.posts.map(el => <Post key={el.id} massage={el.massage} like={el.like} />);

    let newPOstElement = React.createRef()

    let onAddPost = () =>{
        props.addPost()
    } 

    let onPostChange = () =>{
        let text = newPOstElement.current.value
        props.updataNewpostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div>
        <div>
                <h3>my post</h3>
        </div>
        <div>
            <div>
                <Textrea 
                onChange={onPostChange}
                ref={newPOstElement} 
                value={props.newPostText}/>
            </div>
            <button onClick={ onAddPost }>add post</button>
         </div>
         <PostsCollumn>
              { post }            
         </PostsCollumn>
        </div>
    )
}