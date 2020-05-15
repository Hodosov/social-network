import React from 'react'
import styled from 'styled-components';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'

const Img = styled.img`
height: 300px;
`

export const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if(!profile){
        return <div>Loading...</div>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
            <div>
                <Img src={profile.photos.large || 'https://avatars.mds.yandex.net/get-pdb/197794/a90b98f2-c084-4264-911f-266fbfc86b74/s1200'} />
                <div>
                    {isOwner && <input type={'file'} onChange={(e) => onMainPhotoSelected(e)}/>}
                    </div>
                <div>
                    contacts: {profile.contacts.vk}
                    <div>
                        {profile.fullName} 
                    </div>
                    <ProfileStatusWithHooks  status={status}
                    updateStatus={updateStatus}
                    />
                </div>
            </div>
    )
}