import React from 'react'
import styled from 'styled-components'
import BannerNav from '../../containers/home/BannerNav'

const logo = require('../../images/logos/LargeLogo.png')

// styles
const Container = styled.div`
    color: white;
    z-index: 2;
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
        width: 100%;
        font-size: 3rem;
        font-weight: 300 !important;
        text-align: center;
    }
`
const Logo = styled.div`
    position: relative;
    margin: 0 auto 1rem;
    width: 13rem;
    min-height: 7rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
`

export default function Banner() {
    return (
        <React.Fragment>
            <Container>
                <Logo />
                <h1>It's your space</h1>
                <BannerNav />
            </Container>
        </React.Fragment>
    )
}