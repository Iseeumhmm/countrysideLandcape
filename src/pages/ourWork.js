import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
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

export default function AsNavFor() {

  // Get static assets from routes
  const { imagesçToGet } = useRouteData()
  const workImages = imagesToGet
//   let workImages = imagesToGet ? imagesToGet : []
    return (
      <PageContainer>
        <HeaderContainer>
          <Link to="/"><Logo /></Link>
        </HeaderContainer>
        <h1>Pools</h1>
        <AsForNav
          images={workImages}
          >
        </AsForNav>
        <h1>Pools</h1>
        <AsForNav
          images={workImages}
          >
        </AsForNav>
        <h1>Pools</h1>
        <AsForNav
          images={workImages}
          >
        </AsForNav>
      </PageContainer>
    );
}

