import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import SpringCarousel from '../components/carousel/springCarousel'
const background = require('../images/backgrounds/poolPageOpt.jpg')
const logo = require('../images/logos/LargeLogo.png')


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
@media( min-width: 673px ) {
    background-size: cover;
}
`
const Logo = styled.div`
    z-index: 200;
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
    @media( min-width: 673px ) {
        top: 51vw;
    }
    @media( min-width: 771px ) {
        top: 46vw;
        width: 33rem;
        min-height: 10rem;
    }
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
    padding-top: 65vw;
    @media( min-width: 771px ) {
        padding-top: 62vw;
        
    }
`

const ContentContainer = styled.div`
    background-color: "#264A65";
    width: 95%;
    margin: auto;
    padding-bottom: 8rem;
    @media( min-width: 675px ) {
        width: 58.5rem;
    }
`

const pools = () => {
    const { contentfulImages } = useRouteData()
    return (
        <PageContainer>
            <BackgroundContainer>
                <ContentContainer>
                    <Link to="/"><Logo/></Link>
                    <TextContainer>
                        <h1>Your London Pool Builder</h1>
                        <p>We install quality fiberglass in ground swimming pools, fiberglass plunge pools, fiberglass lap pools and water features in and around London Ontario. We are a trusted landscape company with the experience, knowledge and staff to create your landscape dream safely, efficiently and affordably.
                        </p>
                        <h2>View some of our recent work</h2>
                        <SpringCarousel imageData={contentfulImages}/>
                    </TextContainer>
                </ContentContainer>
            </BackgroundContainer>
        </ PageContainer>
    )
}

export default pools