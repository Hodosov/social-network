import React from 'react'
import { Contact } from './Profileinfo'

export const ProfileFormData = ({ profile, stopEditMode }) => {
    return <form>
         <button onClick={()=> stopEditMode()}>save</button>
            <div>
                <b>Full name</b> : {profile.fullName}
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>  
    </form>
}