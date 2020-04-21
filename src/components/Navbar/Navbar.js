import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    grid-area: n;
    background-color: #C9F4F1;
    padding: 10px 40px;
    margin-top: 10px;
    border-radius: 10px;
`

const Div = styled.div`
    height: 22px;
    margin: 10px 0px;
    :active{
        color: #C9F4F1;
    }
`

const Link = styled(NavLink)`
    color: #000;
    text-decoration: none;
    margin: 20px 20px;
    height: 22px;
    font-size: 20px;
    :hover{
        font-size: 22px;
        color: #00caf4;
        margin: 20px;
        cursor: pointer;
    }

`

export const Navabr = () => {
    return (
        <Nav>
            <Div>
                <Link to='/profile' >Profile</Link>
            </Div>
            <Div>
                <Link to='/dialogs'>Massages</Link>
            </Div>
            <Div>
                <Link to='/users'>Find Users</Link>
            </Div>
            <Div>
                <Link to='/news'>News</Link>
            </Div>
            <Div>
                <Link to='/music'>Music</Link>
            </Div>
            <Div>
                <Link to='/setting'>Settings</Link>
            </Div>
        </Nav>
    )
}