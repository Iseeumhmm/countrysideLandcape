
import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { useRouteData } from 'react-static'
import Slider from "react-slick";
import BannerText from '../containers/home/BannerText'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'

import '../carousel.css'; 
var ids = require('short-id')

// Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  h1 { color: white; }
`

const Slide = styled.img`
  filter: brightness(7%) saturate(50%); 
  transform: scale(1.1);
  min-height: 100vh;
  object-fit: cover;
`
const SocialIcons = styled.div`
position: absolute;
text-align: center;
bottom: 0;
width: 100%;
`

// Takes in mutationObserver and checks all slides for changes
const observeChecker = (nodes, observer) => {
  for (var i=0; i<nodes.length; i++) {
    observer.observe(
      nodes[i],
      { attributes: true }
    )
  }
}

export default function Home() {
  const { homePageSliderImages } = useRouteData()

  useEffect(() => {

    
    document.body.classList.add('js-loading');
    let slider = document.getElementsByClassName('slick-slide');
    function callback() {
        let slider = $('.slick-active')
        slider.addClass('zoom')
    }
    const mutationObserver = new MutationObserver(callback)
    observeChecker(slider, mutationObserver)

    $( document ).ready(function() {
      document.body.classList.remove('js-loading');
      $('.slick-slider').addClass('no-pointer')
    });
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
      <Slider {...settings}>
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
      </Slider>
      <BannerText />
      <SocialIcons>
        <img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/>
        <img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/>
      </ SocialIcons>
    </Container>
  )
}

