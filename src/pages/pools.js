import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import Slider from "react-slick";
import SpringCarousel from '../components/carousel/springCarousel'
const background = require('../images/backgrounds/poolPage.jpg')
const logo = require('../images/logos/LargeLogo.png')

import facebook from '../images/icons/facebook.png'


const PageContainer = styled.div`
    background-color: #264A65;
    height: auto;
`
const BackgroundContainer = styled.div`
width: 100vw;
background-image: url(${background});
background-repeat: no-repeat;
filter: brightness(80%);
background-size: contain;
background-position: top center;
`
const Logo = styled.div`
    position: absolute;
    top: 22rem;
    left: calc(50% - 1rem);
    transform: translateX(-50%);
    width: 23rem;
    min-height: 7rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
`
const ContentContainer = styled.div`
    background-color: "#264A65";
    width: 95%;
    margin: auto;
    padding-bottom: 8rem;
`
const TextContainer = styled.div`
    position: relative;
    h1 { color: white; }
    text-align: center;
    p, h2 { 
        text-align: left;
        color: white;
     }
     h2 {
         padding-top: 4rem;
     }
    font-size: 1.25rem;
    padding-top: 32rem;
`
const pools = () => {

    return (
        <PageContainer>
            <BackgroundContainer>
                <ContentContainer>
                    <Logo/>
                    <TextContainer>
                        <h1>Your London Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <h2>View some of our recent work</h2>
                        <SpringCarousel />
                    </TextContainer>
                </ContentContainer>
            </BackgroundContainer>
        </ PageContainer>
    )
}

export default pools