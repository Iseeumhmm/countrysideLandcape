import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Slider from "react-slick";
var ids = require('short-id')

// Styles
const SmallSlide = styled.img`
  filter: brightness(70%);
  object-fit: cover;
`
const LargeSlide = styled.img`
  height: 40rem;
  width: 100%;
  object-fit: cover;
`

export default function AsNavFor(props) {
    // Set State Properties
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
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
        <React.Fragment>
        {/* Top Slider */}
        <Slider {...settingsSmall}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {props.images.map((image) => { 
            return (
              <SmallSlide 
                key={ids.generate()}
                src={image}
              />
              )
            } 
          )}
        </Slider>

        {/* Bottom Slider */}
        <Slider {...settingsLarge}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >
          {props.images.map((image) => { 
            return (
              <LargeSlide 
                key={ids.generate()}
                src={image}
              />
              )
            } 
          )}
        </Slider>
      </React.Fragment>
    )
}

// export default asForNav
