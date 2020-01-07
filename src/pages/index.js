
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { useRouteData } from 'react-static'
import BannerText from '../containers/home/BannerText'


import '../zoom.css'; 
var ids = require('short-id')

// Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
const Carousel = styled.div`
  width: 100%;
  height: 100%;
`
const Slide = styled.img`
  filter: brightness(55%);
  transform: scale(1.07);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function Home() {
  var i = false
  useEffect( () => {
    $('.carousel-item').addClass( "zoom" )
    $('.carousel').carousel()
  })
  const { images } = useRouteData()
  return (
    <Container>
      <Carousel id="carouselBanner" className="carousel slide carousel-fade" data-pause="false" data-ride="carousel">
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
      </Carousel>
    </Container>
  )
}

