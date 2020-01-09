import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { createGlobalStyle } from 'styled-components'
// import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap" rel="stylesheet');
  * {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%;
  
    body {
      font-family: 'Oswald', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
      font-weight: 300;
      line-height: 1.5rem;
      letter-spacing: .1rem;
      // font-size: 16px;
      margin: 0;
      padding: 0;
      color: black;
      h1 {
        font-weight: bold !important;
      }
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
      <GlobalStyle />
      {/* <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </Nav> */}
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
