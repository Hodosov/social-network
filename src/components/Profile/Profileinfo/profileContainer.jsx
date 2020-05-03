import React from 'react'
import styled from 'styled-components'
import { Profile } from '../Profile'
import { connect } from 'react-redux'
import { getUserProfile, setUsersStatus, updateStatus } from '../../../redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect'
import { compose } from 'redux'

const Content = styled.div`
    grid-area: c;
    margin-top: 10px;
`
class ProfileContainer extends React.Component  {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.setUsersStatus(userId)
    }

    render(){
    return (
        <Content>
            <Profile { ...this.props } 
            profile={this.props.profile} 
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
        </Content>
    )}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, setUsersStatus, updateStatus} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
