import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { InputForm, createField } from '../components/common/FormsControl'
import { required, maxLengthCreator } from '../utils/validators'
import { connect } from 'react-redux'
import { login } from '../redux/authReducer'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormError = styled.div`
    border: red 1px solid;
    padding:5px;
    color: red;
    width: 240px;
`

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl}/>
        </div>
    )
}

const maxLength = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captcha}) => {
    return(
        <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'email'} component={InputForm} 
                    validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={InputForm} 
                    validate={[required, maxLength]} type='password'/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
                <div>
                    {captcha && <img src={captcha.captchaUrl} alt="" />}
                    {captcha && createField('Symbols from img', 'captcha', [required], InputForm, {})}
                    { error &&
                    <FormError>
                        {error}
                    </FormError>}
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const mapStateToProps =(state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)