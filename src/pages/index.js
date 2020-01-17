
import React from 'react'
import { useRouteData } from 'react-static'
import KenBurns from '../components/carousel/kenBurns'
// import BrowserDetection from 'react-browser-detection';
import BannerText from '../containers/home/BannerText'
import NavBar from '../containers/navigation/navbar'
import instagram from '../images/icons/instagram.png'
import facebook from '../images/icons/facebook.png'
import styled from 'styled-components'

// const browserHandler = {
//   chrome: () => {
//     console.log('This is Chrome')
//   return <div>Chrome is fantastic!</div>
//   },
//   googlebot: () => <div>Hi GoogleBot!</div>,
//   default: (browser) => {
//     console.log("This is: ", browser)
//     return <div>Hi {browser}!</div>
//   },
// };

// Styles
const Container = styled.div`
  position: fixed;
  overflow: hidden;
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
    <Container style={{position: "relative", overflowX: "hidden"}}>
       {/* <BrowserDetection>
       { browserHandler }
    </BrowserDetection> */}
      <NavBar style={{zIndex: "1000"}}/>
      <KenBurns images={ homePageSliderImages } />
      <BannerText />
      <SocialIcons>
        <img src={instagram} style={{ width: "4rem", margin: "1rem" }} alt="Instagram icon"/>
        <img src={facebook} style={{ width: "4rem", margin: "1rem" }} alt="Facebook icon"/>
      </ SocialIcons>
    </Container>
  )
}

