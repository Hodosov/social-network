import React from 'react'
import styled from 'styled-components';

const Headers = styled.header`
    grid-area: h;
    height: 70px;
    background-color: #C9F4F1;
`

const Images = styled.img`
    width: 60px;
    padding: 5px 40px;
`

const Header = () => {
    return (
        <Headers>
            <Images src='http://yoomark.com/sites/default/files/field/image/react-technologies-9ce31d51432424bcd4626f5f730580f3cddc9c211c1577e9950138550233542a_0.png' />
        </Headers>
    )
}

export default Header