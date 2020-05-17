import React from 'react';
import './App.css';
import styled from 'styled-components';
import HeaderContainer from './components/Header/HeaderContainer'
import { Navbar } from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/Profileinfo/profileContainer';
import { Route, withRouter } from 'react-router-dom';
import { Chart } from './components/news/news';
import Login from './login/login'
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))


const Body = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`

const AppWrapper = styled.div`
    display: grid;
    grid-template-areas:
    'h h'
    'n c';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
    width: 1400px;
`

class App extends React.Component {

    componentDidMount(){
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <h1>Loading.....</h1>
        }

        return (
            <Body>
                <AppWrapper>
                    <HeaderContainer />
                    <Navbar />
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer />} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={withSuspense(UsersContainer)} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' render={() => <Chart />} />
                </AppWrapper>
            </Body>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))
    (App)