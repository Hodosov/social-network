import React from 'react'
import { connect } from "react-redux";
import { Users } from './users'
import {
    follow, unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    GetUsers
} from '../../redux/Users-reducer'
import styled from 'styled-components';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getUsers, 
    getPageSize, 
    getTotalUsersCount, 
    getCurrentPage, 
    getIsFetching, 
    getIsFollowInProgress} from '../../redux/UsersSelectors'

const Img = styled.img`
    width: 100px;
`

class UsersContainers extends React.Component {

    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.GetUsers(p, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Img src='https://acs-web.com/blog/wp-content/uploads/2014/09/Loading-circles-acs-rectangles.gif' /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            /></div>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowInProgress(state)
    }
}

let UsersContainer = compose(
    connect(mapStateToProps, {
        unfollow,
        follow,
        setCurrentPage,
        toggleIsFollowingProgress,
        GetUsers
    }),
    // withAuthRedirect
)(UsersContainers)

export default UsersContainer