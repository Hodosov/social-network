import React from 'react'
import styled from 'styled-components'
import { Profile } from '../Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../redux/Profile-reducer'
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
    }

    render(){
    return (
        <Content>
            <Profile { ...this.props } profile={this.props.profile}/>
        </Content>
    )}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
