
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { useRouteData } from 'react-static'
import Slider from "react-slick";
import BannerText from '../containers/home/BannerText'


import '../carousel.css'; 
var ids = require('short-id')

// Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Slide = styled.img`
  filter: brightness(7%); 
  transform: scale(1.1);
  // width: 100%;
  min-height: 100vh;
  object-fit: cover;
`
const observeChecker = (nodes, observer) => {
  for (var i=0; i<nodes.length; i++) {
    observer.observe(
      nodes[i],
      { attributes: true }
    )
  }
}

export default function Home() {
 
  useEffect(() => {
    document.body.classList.add('js-loading');
    console.log( "[js-loading] added" );
    let slider = document.getElementsByClassName('slick-slide');
    function callback() {
        console.log( "[slick-active] added" );
        let slider = $('.slick-active')
        slider.addClass('zoom')
    }
    const mutationObserver = new MutationObserver(callback)
    observeChecker(slider, mutationObserver)
    $( document ).ready(function() {
      document.body.classList.remove('js-loading');
      console.log( "[js-loading] removed" );
    });
    console.log( "react fired" );
   }, []);
  const { images } = useRouteData()
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
    touchMove: false
  }
  return (
    <Container>
      <Slider {...settings}>
        {images.map((post) => {
          const mobileImg = (post.backgroundImageMobile) ? `${post.backgroundImageMobile.fields.file.url}` : `${post.backgroundImage.fields.file.url} 2048w`
          const sourceSet = (post.backgroundImageMobile) ? `${post.backgroundImageMobile.fields.file.url} 768w, ${post.backgroundImage.fields.file.url} 2048w` : `${post.backgroundImage.fields.file.url} 2048w`
          return (
            <Slide 
              key={ids.generate()}
              srcSet={sourceSet}
              sizes="100vw"
              src={mobileImg} >
            </Slide>
          )}
        )}
      </Slider>
      <BannerText />
    </Container>
  )
}

{/* <Carousel id="carouselBanner" className="carousel slide carousel-fade" data-pause="false" data-ride="carousel">
        <div className="carousel-inner h-100">
          {images.map((post, index) => {
            var carouselItem = !i ? "active" : ""
            const mobileImg = (post.backgroundImageMobile) ? `${post.backgroundImageMobile.fields.file.url}` : `${post.backgroundImage.fields.file.url} 2048w`
            const sourceSet = (post.backgroundImageMobile) ? `${post.backgroundImageMobile.fields.file.url} 768w, ${post.backgroundImage.fields.file.url} 2048w` : `${post.backgroundImage.fields.file.url} 2048w`
            i = true;
            return (
                <div key={ids.generate()} className={`carousel-item ${carouselItem} h-100`} data-interval="5000" >
                <Slide 
                  srcSet={sourceSet}
                  sizes="100vw"
                  src={mobileImg} >
                </Slide>
              </div>
            )}
          )}
        </div>
        <BannerText />
      </Carousel> */}