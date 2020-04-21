import React from 'react'
import styled from 'styled-components'
import * as axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export class Users extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => this.props.setUsers(responce.data.items))
    }

    render() {
        return <Wrapper>
            {this.props.users.map(el => <Wrapper key={el.id}>
                <div>
                    <div>
                        img
                </div>
                    <div>
                        {el.followed === true
                            ? <button onClick={() => { this.props.unfollow(el.id) }} >UNFOLLOW</button>
                            : <button onClick={() => { this.props.follow(el.id) }} >FOLLOW</button>}
                    </div>
                </div>
                <div>
                    <span>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            {el.name}
                        </div>
                    </span>
                    <span>
                        {/* <div>{el.location.city}</div>
                    <div>{el.location.country}</div> */}
                    </span>
                </div>


            </Wrapper>)}
        </Wrapper>
    }
}