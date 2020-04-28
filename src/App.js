import React from 'react';
import './App.css';
import styled from 'styled-components';
import HeaderContainer from './components/Header/HeaderContainer'
import { Navabr } from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/Profileinfo/profileContainer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import { UsersContainer }  from './components/Users/UsersContainer';

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

export const App = () => {
    return (
        <Body>
            <AppWrapper>
                <HeaderContainer />
                <Navabr />
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/users'  render={() => <UsersContainer />}/>
            </AppWrapper>
        </Body>
    );
}
