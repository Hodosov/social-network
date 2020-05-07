import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { InputForm } from '../components/common/FormsControl'
import { required, maxLengthCreator } from '../utils/validators'

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const maxLength = maxLengthCreator(15)

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={InputForm} 
                    validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={InputForm} 
                    validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> rememder me
            </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)