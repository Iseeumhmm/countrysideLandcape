import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import NavBar from '../containers/navigation/navbar'
import SpringCarousel from '../components/carousel/springCarousel'
const background = require('../images/backgrounds/poolPage.jpg')
const backgroundLarge = require('../images/backgrounds/poolPage_2360.jpg')

const logo = require('../images/logos/logo-trial.png')
const catalogue = require('../../public/Leisure Pools Consumer Brochure 2019-0424.pdf')

const PageContainer = styled.div`
    background-color: #2C5E7E;
    height: auto;
`
const BackgroundContainer = styled.div`
width: 100vw;
background-image: url(${background});
background-repeat: no-repeat;
background-size: contain;
background-position: top center;
@media( min-width: 950px ) {
    background-image: url(${backgroundLarge});
}
@media( min-width: 1575px ) {
    /* background-size: cover; */
}
`
const Logo = styled.div`
    position: absolute;
    top: 48vw;
    /* top: 22rem; */
    left: calc(50% - 1rem);
    transform: translateX(-50%);
    width: 23rem;
    min-height: 7rem;
    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
    z-index: 50;
    @media( min-width: 673px ) {
        top: 51vw;
    }
    @media( min-width: 771px ) {
        width: 33rem;
        min-height: 10rem;
    }
    @media( min-width: 950px ) {
        top: 38vw;
        width: 27vw;
        min-height: 9vw;
    }
    @media( min-width: 1575px ) {
        top: 42rem;
        width: 25rem;
        min-height: 8rem;
    }
`
const TextContainer = styled.div`
    width: 95%;
    margin: auto;
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
     p { padding-bottom: 4rem; }
    font-size: 1.25rem;
    padding-top: 68vw;
    @media( min-width: 950px ) {
        padding-top: 48vw;
        width: 68%;
        margin: auto;
    }
    @media( min-width: 1575px ) {
        padding-top: 50rem;
        width: 69%;
    }
`

const ContentContainer = styled.div`
    background-color: "#264A65";
    width: 95%;
    margin: auto;
    top: 4rem;
    padding-bottom: 8rem;
    @media( min-width: 675px ) {
        position: relative;
        left: 1px;
        width: 85vw;
        box-shadow: 0px 0px 75px 0px rgba(0,0,0,0.75);
    }
    @media( min-width: 1575px ) {
        /* width: 55vw; */
}
`

const pools = () => {
    const { contentfulImages } = useRouteData()
    return (
        <PageContainer style={{position: "relative", overflowX: "hidden"}}>
            <BackgroundContainer >
                <NavBar style={{zIndex: "1000"}}/>
                <ContentContainer>
                    <Link to="/"><Logo/></Link>
                    <TextContainer>
                        <h1>Your London Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <a href={catalogue} download>Download Pool Catalogue</a>
                        <h2>View some of our recent work</h2>
                        <SpringCarousel imageData={contentfulImages}/>
                    </TextContainer>
                </ContentContainer>
            </BackgroundContainer>
        </ PageContainer>
    )
}

export default pools