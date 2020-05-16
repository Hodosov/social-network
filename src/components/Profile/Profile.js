import React from 'react'
import styled from 'styled-components';
import { ProfileInfo } from './Profileinfo/Profileinfo';
import { MypostsContainer } from '../Profile/Myposts/MypostsContainer'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`

export const Profile = React.memo((props) => {
    return (
        <Content>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            <MypostsContainer />
        </Content>
    )
})