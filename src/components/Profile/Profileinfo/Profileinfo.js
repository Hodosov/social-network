import React from 'react'
import styled from 'styled-components';

const Imgs = styled.img`
height: 200px;
width: 100%;
`

export const Profileinfo = () => {
    return (
        <div>
            <div>
                <Imgs src='https://i.artfile.ru/3840x1200_524734_[www.ArtFile.ru].jpg' />
            </div>
            <div>
                ava
            </div>
        </div>
    )
}