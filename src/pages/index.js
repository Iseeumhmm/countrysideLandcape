
import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { useRouteData } from 'react-static'
import KenBurns from '../components/carousel/kenBurns'
import BannerText from '../containers/home/BannerText'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'

import '../carousel.css'; 

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

  useEffect(() => {
    
    
   }, []);

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    draggable: false,
    fade: true,
    infinite: true,
    pauseOnFocus: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false,
    useTransforms: false
  }
  return (
    <Container>
      {/* <Slider {...settings}>
        {homePageSliderImages.map((url) => {
          return (
            <Slide 
              key={ids.generate()}
              srcSet={`${url}?fm=jpg&w=800&fl=progressive 800w, ${url}?fm=jpg&w=1200&fl=progressive 1200w, ${url}?fm=jpg&w=1900&fl=progressive 1900w`}
              sizes="100vw"
              src={url} >
            </Slide>
          )}
        )}
      </Slider> */}
      <KenBurns images={ homePageSliderImages } />
      <BannerText />
      <SocialIcons>
        <img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/>
        <img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/>
      </ SocialIcons>
    </Container>
  )
}

