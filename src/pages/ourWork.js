import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import Slider from "react-slick";
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
const SmallSlide = styled.img`
  filter: brightness(70%);
  object-fit: cover;
`
const LargeSlide = styled.img`
  height: 40rem;
  width: 100%;
  object-fit: cover;
`

export default function AsNavFor() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [images, setImages] = useState({});
  

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
    setImages({
      image1 : "https://source.unsplash.com/random/300x300/?nature,water",
      image2 : "https://source.unsplash.com/random/300x300/?nature,trees",
      image3 : "https://source.unsplash.com/random/300x300/?nature,pond",
      image4 : "https://source.unsplash.com/random/300x300/?nature,sky"
    })
    console.log('images: ', images.length)
  }, [slider1, slider2])

  const settingsSmall = {
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  }
  const settingsLarge = {
    arrows: false
  }

 
    return (
      <PageContainer>
      <HeaderContainer>
        <Link to="/"><Logo /></Link>
      </HeaderContainer>
      <div id="pools">
        <h1>Pools</h1>
        <Slider {...settingsSmall}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <SmallSlide 
            src={images.image1}
          />
          <SmallSlide 
            src="https://source.unsplash.com/random/300x300/?nature,trees"
          />
          <SmallSlide 
            src="https://source.unsplash.com/random/300x300/?nature,pond"
          />
          <SmallSlide 
            src="https://source.unsplash.com/random/300x300/?nature,sky"
          />
        </Slider>
        {/* Bottom Slider */}
        <Slider {...settingsLarge}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >
          <LargeSlide 
            src="https://source.unsplash.com/random/300x300/?nature,water"
          />
          <LargeSlide 
            src="https://source.unsplash.com/random/300x300/?nature,trees"
          />
          <LargeSlide 
            src="https://source.unsplash.com/random/300x300/?nature,pond"
          />
          <LargeSlide 
            src="https://source.unsplash.com/random/300x300/?nature,sky"
          />
        </Slider>
        
      </div>
      </PageContainer>
    );
}

