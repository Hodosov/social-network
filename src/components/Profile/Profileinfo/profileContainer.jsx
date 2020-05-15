import React from 'react'
import styled from 'styled-components'
import { Profile } from '../Profile'
import { connect } from 'react-redux'
import { getUserProfile, setUsersStatus, updateStatus, savePhoto } from '../../../redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`
class ProfileContainer extends React.Component  {

    refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.userId
        if(!userId){
            this.props.history.push('/login')}
        }
        this.props.getUserProfile(userId)
        this.props.setUsersStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId != prevProps.match.params.userId){
           this.refreshProfile() 
        }
        
    }

    render(){
    return (
        <Content>
            <Profile { ...this.props } 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile} 
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            />
        </Content>
    )}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, setUsersStatus, updateStatus, savePhoto} ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
