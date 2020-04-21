import React from 'react'
import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, unfollowAC, setUsersAC } from '../../redux/Users-reducer'

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },


        follow: (userId) => {
            dispatch(followAC(userId))
        },

        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        }
    }
}


export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)