import React from 'react'
import styled from 'styled-components';
import { Myposts } from './Myposts/Myposts'
import { Profileinfo } from './Profileinfo/Profileinfo';
import { MypostsContainer } from '../Profile/Myposts/MypostsContainer'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`

export const Profile = (props) => {
    return (
        <Content>
            <Profileinfo />
            <MypostsContainer 
            posts={props.state.posts} 
            dispatch={props.dispatch} 
            newPostText={props.state.newPostText} 
            />
        </Content>
    )
}