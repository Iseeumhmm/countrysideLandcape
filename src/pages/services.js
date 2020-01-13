import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import { useRouteData } from 'react-static'
import AsForNav from '../components/carousel/AsForNav'


const logo = require('../images/logos/LargeLogoSlogan.png')

// Styles
const PageContainer = styled.div`
  width: 85%;
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
  position: relative;
  right: 10px;
  width: 23rem;
  min-height: 7rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
const TextContainer = styled.div`
  padding: 8rem 0 0;
  h1 {
    text-align: center;
  }
  p {
    padding-top: 2rem;
  }
  b {
    font-weight: 700;
  }
  &:last-child {
    padding-bottom: 8rem;
  }
`
const Photo = styled.img`
  object-fit: cover;
  width: 15rem;
  margin: auto;
`

export default function About() {
  const { workImages } = useRouteData()
  let service = workImages.copy
  const individualItems = {
    [service]: workImages.items
  }
    let nav 
    if (workImages.items) {
        nav = (
            <AsForNav images={individualItems} />
        )
        
    } else {
        console.log('no pools')
    }
    return (
      <PageContainer>
        <HeaderContainer>
          <Link to="/"><Logo /></Link>
        </HeaderContainer>
        <h1>{workImages.copy}</h1>
        {nav}
        <TextContainer>
        <h1>To Complete</h1>
       
        </TextContainer>
      </PageContainer>
    );
}

