import React, { useState } from 'react'
import styled from 'styled-components';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'
import { ProfileDataReduxForm } from './profileDataForm'

const Img = styled.img`
height: 300px;
`

export const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <div>Loading...</div>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
    }

    return (
        <div>
            <Img src={profile.photos.large || 'https://avatars.mds.yandex.net/get-pdb/197794/a90b98f2-c084-4264-911f-266fbfc86b74/s1200'} />
            <div>
                {isOwner && <input type={'file'} onChange={(e) => onMainPhotoSelected(e)} />}
            </div>
            <div>
                <div>
                    {editMode 
                    ? <ProfileDataReduxForm 
                    onSubmit={onSubmit}
                    profile={profile}
                    stopEditMode={() => setEditMode(false)}/> 
                    :  <ProfileData profile={profile} 
                    isOwner={isOwner} 
                    toEditMode={() => setEditMode(true)}/>}
                </div>
                <ProfileStatusWithHooks status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return(
        <div>
            {isOwner && <button onClick={()=> toEditMode() }>Edit Prifile</button>}
            <div>
                <b>Full name</b> : {profile.fullName}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

export const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}</b>{contactValue}</div>
}

