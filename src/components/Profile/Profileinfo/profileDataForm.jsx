import React from 'react'
import { createField, InputForm, TextArea } from '../../common/FormsControl'
import { reduxForm } from 'redux-form'
import { Contact } from './Profileinfo'

const ProfileFormData = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <button onClick>save</button>
        { error &&
                    <div>
                        {error}
                    </div>}
        <div>
            <b>Full name</b> : {createField('Full name', 'fullName', [], InputForm)}
        </div>
        <div>
            <b>Looking for a job</b> : {createField('', 'lookingForAJob', [], InputForm, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField('My professional skills', 'LookingForAJobDescription', [], TextArea)}
        </div>
        <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return <div>
                        <b>{key}</b> {createField(key, 'contacts.' + key, [], InputForm)}
                    </div>
                })}
            </div>
        <div>
            <b>About me</b>: 
            {createField('About me', 'aboutMe', [], TextArea)}
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm({
    form: 'profile',
})(ProfileFormData)