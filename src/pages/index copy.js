import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useRouteData } from 'react-static'
import { Fade } from 'react-slideshow-image';


// Slide config

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    resetAnimation()
  }
}

// Styles
const Background = styled.div`
  width: 100vw;
  height: 100vh;
`
const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  
`
const scale = keyframes`
  0% { transform: scale(1.1,1.1); }
  100% { transform: scale(1,1); }
`
const Zoom = styled.div`
  animation: ${scale};
  animation-duration: 5500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`

const resetAnimation = () => {
  console.log('inside function: ' + Zoom)
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { images } = useRouteData()
  return (
  <Background>
    <div className="slide-container">
    {/* <style children={Zoom} /> */}
      <Fade {...fadeProperties}>
    {images.map((post, index) => {
    
    return (
            <Zoom key={index} className="each-fade">
              <BackgroundImage  style={{'backgroundImage': `url(${post.backgroundImage.fields.file.url})`}}>
                <span>{`slide ${index}`}</span>
                <p>Biver</p>
              </BackgroundImage>
            </Zoom>
        //  <BackgroundImage 
        //     key={index} 
        //     value={index}
        //     style={{backgroundImage: `url(${post.backgroundImage.fields.file.url})`, animation: `scale ${transitionTime + extraTime}s infinite linear forwards`}}>
        //   </BackgroundImage>
     )
    }
    
     )}
     
      </Fade>
        </div>
  </Background>
  )
}

// const { images } = useRouteData()
//   console.log('images: ' + images.length)
//   var interval = images.length * transitionTime
//   return (
//   <Background style={{ textAlign: 'center' }}>
//     {images.map((post, index) => {
//     console.log('index: ' + index)
//     interval -= transitionTime
//     const extraTime = interval 
//     console.log('interval: ' + interval)
//     return (
//          <BackgroundImage 
//             key={index} 
//             value={index}
//             style={{backgroundImage: `url(${post.backgroundImage.fields.file.url})`, animation: `scale ${transitionTime + extraTime}s infinite linear forwards`}}>
//           </BackgroundImage>
//      )
//     }
//      )}
//   </Background>
//   )