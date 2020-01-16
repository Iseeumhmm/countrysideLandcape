import React from 'react'
import { Helmet } from 'react-helmet'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import backgroundPools from './images/backgrounds/poolPage.jpg'
// import og_image from './images/backgrounds/og_imageOpt.jpg'


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const theme = {
  secondaryColour: 'purple',
  lineHeight: "2.6rem"
}

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap" rel="stylesheet'); */
  /* @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300,700|Roboto:300&display=swap'); */
  /* alegreya-sans-sc-300 - latin */
  @font-face {
    font-family: 'Alegreya Sans SC';
    font-style: normal;
    font-weight: 300;
    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),
        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* alegreya-sans-sc-regular - latin */
    @font-face {
      font-family: 'Alegreya Sans SC';
      font-style: normal;
      font-weight: 400;
      src: local('Alegreya Sans SC Regular'), local('AlegreyaSansSC-Regular'),
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* alegreya-sans-sc-700 - latin */
    @font-face {
      font-family: 'Alegreya Sans SC';
      font-style: normal;
      font-weight: 700;
      src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),
          
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/alegreya-sans-sc-v9-latin/alegreya-sans-sc-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-300 - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: local('Roboto Light'), local('Roboto-Light'),
          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/roboto-v20-latin/roboto-v20-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* roboto-regular - latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: local('Roboto'), local('Roboto-Regular'),
          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  } 

  * {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%;
  
    body {
      /* // font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; */



      
      font-family: 'Alegreya Sans SC', sans-serif;


      font-weight: 300;
      line-height: 2.6rem;
      letter-spacing: .1rem;
      font-size: 16px;
      margin: 0;
      padding: 0;
      color: black;
      h1 {
        font-weight: bold;
        color: black;
      }
      p {
        font-family: 'Roboto', sans-serif;
        line-height: 2.6rem;

      }
    }
    @media(min-width: 534px) {
      font-size: 70%;
    } 
  }
  
  a {
    text-decoration: none;
    color: white;
  }

  img {
    max-width: 100%;
  }
`


function App() {
  return (
    <Root>
       <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/dynamic">Dynamic</Link>
        </Nav> */}
        <Helmet>
        <title>Your London Pool Builder</title>
            <meta property="og:title" content="Your London Pool Buider" />
            <meta property="og:description" content="We install quality in-ground swimming pools, lap pools and water features in the London Ontario area" />
            <meta property="og:url" content="http://www.countrysidelandscape.com" />
            <meta property="og:image" content="/poolPage.jpg" />
            <meta property="og:image:secure_url" content="/poolPage.jpg" />
            <link rel="preload" as="image" href={backgroundPools} imagesizes="100vw" />
          </Helmet>
        <div className="content">
          
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </Root>
  )
}

export default App
