import React from 'react'
import { connect } from "react-redux";
import { Users } from './users'
import * as axios from 'axios'
import { follow, 
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching, 
    toggleIsFollowingProgress,
    GetUsersThunkCreator
} from '../../redux/Users-reducer'
import styled from 'styled-components';
import { usersAPI } from '../../api/api'

const Img = styled.img`
    width: 100px;
`

class UsersContainers extends React.Component {

    componentDidMount() {

        // GetUsersThunkCreator(this.props.currentPage ,this.props.pageSize)

        this.props.toggleIsFetching(true)

        usersAPI.getUsers( this.props.currentPage ,this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
        }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        
        usersAPI.getUsers(p ,this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
        })
    }

    render() {
        return <div>
        {this.props.isFetching ? <Img src='https://acs-web.com/blog/wp-content/uploads/2014/09/Loading-circles-acs-rectangles.gif'/> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        isFetching={this.props.isFetching}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingInProgress= {this.props.followingInProgress}

        /></div>
      
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress:  state.userPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {

//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },


//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },

//         setUsers: (userId) => {
//             dispatch(setUsersAC(userId))
//         },

//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },

//         setTotalUsersCount: (totalCoutn) => {
//             dispatch(setTotalUsersCountAC(totalCoutn))
//         },

//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export let UsersContainer = connect(mapStateToProps, {
    unfollow,
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
})(UsersContainers)