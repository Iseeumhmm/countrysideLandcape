import React from 'react'
import { Link } from 'components/Router'
import NavBar from '../containers/navigation/navbar'
import { useRouteData } from 'react-static'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const logo = require('../images/logos/LargeLogoSplash.png')

//Styles

const PageContainer = styled.div`
    width: 95%;
    margin: auto;
    position: relative;
    max-width: 100%;
    overflow-x: hidden;
    text-align: center;
    h3 {
        margin-top: -.5rem;
    }
    img {
        border-radius: 10px;
    }
    @media( min-width: 775px ) {
        width: 65%;
    } 
`
const Logo = styled.div`
  width: 23rem;
  min-height: 8rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
const HeaderContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Services = () => {
    const pageImages = useRouteData()

    let imageArray = []
    if (pageImages) { pageImages[1].forEach( each => {
        let image = {
            title: each.shortTitle,
            description: each.shortDescriptionOfImage,
            image: `${each.full1920x1280.fields.file.url}?w=1920&q=40&fl=progressive`
        }
        imageArray.push(image)
    })}

    return (
        <PageContainer>
            <HeaderContainer id="header">
                <NavBar black style={{zIndex: "1000"}}/>
                <Link to="/"><Logo /></Link>
            </HeaderContainer>
            <h1 id="Heading">{pageImages[0]}</h1>
            {imageArray ? imageArray.map((each, i) =>{
                return (
                    <Fade key={i} left={(i % 2 === 0)} right={!(i % 2 === 0)}>
                        <img src={each.image} alt={each.shortTitle}></img>
                        <h3>{each.description}</h3>
                    </Fade>
                )
            }) : ""}
        </PageContainer>
    )

}

export default Services