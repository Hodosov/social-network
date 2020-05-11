import React from 'react'
import Post from './post/Post'
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators'
import { TextArea } from '../../common/FormsControl'

const Textarea = styled(Field)`
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

    let onAddPost = (values) =>{
        props.addPost(values.AddNewPostTextForm)
    } 

    return (
        <div>
        <div>
                <h3>my post</h3>
        </div>
        <div>
              <AddNewPostForm onSubmit={onAddPost}/>
         </div>
         <PostsCollumn>
              { post }            
         </PostsCollumn>
        </div>
    )
}


const maxLength = maxLengthCreator(10)

const AddNewProfilePostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='AddNewPostTextForm'
                component={TextArea}
                placeholder={'send message'}
                validate={[required, maxLength]}/>
            </div>
            <button>add post</button>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: 'AddNewPostForms'})(AddNewProfilePostForm)