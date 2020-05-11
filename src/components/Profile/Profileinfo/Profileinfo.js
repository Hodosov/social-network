import React from 'react'
import styled from 'styled-components';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'

const Imgs = styled.img`
height: 200px;
width: 100%;
`

export const Profileinfo = (props) => {

    if(!props.profile){
        return <div>Loading...</div>
    }

    return (
            <div>
                <img src={props.profile.photos.large} />
                <div>
                    contacts: {props.profile.contacts.vk}
                    <div>
                        {props.profile.fullName} 
                    </div>
                    <ProfileStatusWithHooks  status={props.status}
                    updateStatus={props.updateStatus}
                    />
                </div>
            </div>
    )
}