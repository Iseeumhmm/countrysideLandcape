import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import AsForNav from '../components/carousel/AsForNav'
const logo = require('../images/logos/LargeLogo.png')

// Styles
const PageContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
`
const HeaderContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.div`
  width: 13rem;
  min-height: 7rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
const TextContainer = styled.div`
    padding-top: 1rem;
    p { padding-top: 1rem; }
    h2 { padding-top: 2rem; }
`

export default function AsNavFor() {

  // Get static assets from routes
  const { contentfulImages } = useRouteData()
//   let workImages = imagesToGet ? imagesToGet : []

    useEffect(() => {
        
        // console.log('Contentful stuff from routes: ', workImages.pools[0].full1920x1280.fields.file.url)
        // console.log('Contentful stuff from routes: ', workImages)
        
    }, [])
    let nav 
    if (contentfulImages) {
        nav = (
            <AsForNav images={contentfulImages} />
        )
        
    } else {
        console.log('no pools')
    }
    return (
      <PageContainer>
        <HeaderContainer>
          <Link to="/"><Logo /></Link>
        </HeaderContainer>
        <h1>Explore Our Work</h1>
        {nav}
        <TextContainer>
        <h1>Method</h1>
        <p><b>At Countryside Landscape</b> we work with you from the initial consultation through to the final approval to make sure you are 100% satisfied with your landscape project. </p>
        <h2>THE CONSULTATION: </h2>
        <p>The process starts with a free consultation at your property with our landscape designer. We will review your property and discuss your goals for the project. During this initial consultation we will discuss your personal style and talk about any problem areas you would like fixed including what areas of the property we will focus on. After this meeting I will generate a Conceptual Plan with the first impressions of what would work best. This will give an idea of the direction towards a Master Plan package. </p>
        <h2>THE DESIGN AND QUOTATION: </h2>
        <p>The next time we meet I will have a Master Plan and any supporting photos or sketches to ensure the design is clearly communicated. After going through this design, I will take an opportunity to make any revisions in order to proceed to a formal quote. The presentation of our quotation will occur shortly after and will be itemized into tasks or areas so that we clearly communicate the cost of individual items within your project. By doing this, we can work with you to complete the entire project in one phase, or we are happy to complete it by phasing things in over a few years. We are even happy to work with you if you would like to tackle a few elements on your own. </p>
        <h2>CONSTRUCTION: </h2>
        <p>After we have agreed on a plan of action including a schedule, we begin construction. All public utility locates and permits are taken care of by Countryside Landscape and we will also ensure your site safety is maintained throughout the project. Our professional team will make sure your project reaches completion in a timely manner for minimal disruption. During construction we will always keep you informed and welcome any questions or concerns you might have about the process. </p>
        <h2>FINAL SIGN OFF: </h2>
        <p>Now that construction is complete, we will walk through the entire project with you to ensure 100% satisfaction. All that is left is the enjoyment of your custom landscape. </p>
        </TextContainer>
      </PageContainer>
    );
}

