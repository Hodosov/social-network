import React from 'react'
import styled from 'styled-components'
import { Profile } from '../Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/Profile-reducer'
import { withRouter } from 'react-router-dom'


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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render(){
    return (
        <Content>
            <Profile { ...this.props } profile={this.props.profile}/>
        </Content>
    )}
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile} )(WithUrlDataContainerComponent)