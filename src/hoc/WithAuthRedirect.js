import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuthRedirect = ( Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.auth) return <Redirect to={'/login'} />

            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsFOrRedirect = (state) => {
        return {
            auth: state.auth.isAuth
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsFOrRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}