import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    border: solid;
    border-color: #C9F4F1;
    width: 500px;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
`

const Img = styled.img`
    width: 70px;
    border-radius: 50%;
`

const Post = (props) => {
    return (
        <Div>
            <Img src='https://avatars.mds.yandex.net/get-pdb/1667260/3ec2154a-cd3f-4c24-b13b-6c60951dd0b0/s1200?webp=false' />
            {props.massage}
            <div>
                <span>Like {props.like}</span>
            </div>
        </Div>
    )
}

export default Post