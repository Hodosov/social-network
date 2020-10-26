import React from 'react'
import { connect } from "react-redux";
import { Users } from './Users'
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
import { UsersType } from '../../types/types';

const Img = styled.img`
    width: 100px;
`

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    GetUsers: (currentPage: number, pageSize: number) => void
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    toggleIsFollowingProgress: any
}

class UsersContainers extends React.Component<PropsType> {

    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
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

let mapStateToProps = (state: any) => {
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