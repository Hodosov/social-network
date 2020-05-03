import React from 'react'
import styled from 'styled-components';
import { ProfileStatus } from './ProfileStatus'

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
            {/* <div>
                <Imgs src='https://i.artfile.ru/3840x1200_524734_[www.ArtFile.ru].jpg' />
            </div> */}
            <div>
                <img src={props.profile.photos.large} />
                <div>
                    contacts: {props.profile.contacts.vk}
                    <div>
                        {props.profile.fullName} 
                    </div>
                    <ProfileStatus  status={props.status}/>
                </div>
            </div>
        </div>
    )
}