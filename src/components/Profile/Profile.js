import React from 'react'
import styled from 'styled-components';
import { Profileinfo } from './Profileinfo/Profileinfo';
import { MypostsContainer } from '../Profile/Myposts/MypostsContainer'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`

export const Profile = (props) => {
    return (
        <Content>
            <Profileinfo 
            profile={props.profile} 
            status={props.status}
            updateStatus={props.updateStatus}/>
            <MypostsContainer />
        </Content>
    )
}