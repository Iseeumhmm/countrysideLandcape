
import React from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { useRouteData } from 'react-static'
import KenBurns from '../components/carousel/kenBurns'
import BannerText from '../containers/home/BannerText'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'

// import '../carousel.css'; 

// Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  h1 { color: white; }
`

const SocialIcons = styled.div`
position: absolute;
text-align: center;
bottom: 0;
width: 100%;
`

export default function Home() {
  const { homePageSliderImages } = useRouteData()

  return (
    <Container>
      <KenBurns images={ homePageSliderImages } />
      <BannerText />
      <SocialIcons>
        <img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/>
        <img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/>
      </ SocialIcons>
    </Container>
  )
}

