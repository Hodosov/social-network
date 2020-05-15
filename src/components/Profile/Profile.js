import React, {memo} from 'react'
import styled from 'styled-components';
import { Profileinfo } from './Profileinfo/Profileinfo';
import { MypostsContainer } from '../Profile/Myposts/MypostsContainer'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`

export const Profile = React.memo((props) => {
    return (
        <Content>
            <Profileinfo
            isOwner={props.isOwner}
            profile={props.profile} 
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}/>
            <MypostsContainer />
        </Content>
    )
})