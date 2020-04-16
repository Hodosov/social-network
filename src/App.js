import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header'
import { Navabr } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const Body = styled.div`
    display: flex;
    justify-content: center;
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

export const App = (props) => {
    return (
        <Body>
            <AppWrapper>
                <Header />
                <Navabr />
                <Route path='/profile' render={() => <Profile
                    state={props.state.profile}
                    dispatch={props.dispatch}
                />} />
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.dialogs}
                    dispatch={props.dispatch} />} />
            </AppWrapper>
        </Body>
    );
}
