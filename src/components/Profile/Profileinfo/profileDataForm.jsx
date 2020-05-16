import React from 'react'
import { Contact } from './Profileinfo'
import { createField, InputForm, TextArea } from '../../common/FormsControl'
import { reduxForm } from 'redux-form'

const ProfileFormData = ({ profile, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <button onClick>save</button>
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
    </form>
}

export const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileFormData)