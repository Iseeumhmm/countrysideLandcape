import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link } from 'components/Router'
import '../artibot.css'
import NavBar from '../containers/navigation/navbar'
const logo = require('../images/logos/LargeLogoBlack.png')
const Background = require('../images/backgrounds/contact.jpg')

// Styles

const PageContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  height: ${ props => props.vh}px;
  position: relative;
  text-align: center;
`
const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
`
const TextContainer = styled.div`
  position: absolute;  
  top: 42vw;
  width: 100%;
  p {
      color: #fff;
      font-weight: 300;
      font-family: 'Alegreya Sans SC';
      font-size: 4rem;
  }
`
const Logo = styled.div`
  margin:  5rem auto 0;
  width: 23rem;
  min-height: 8rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`

const ContactButton = styled.button`
  background-color: rgba(255,255,255, .1);
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
  font-size: 1.75rem;
  z-index: 200;
  width: 11rem;
  height: 4rem;
  @media( min-width: 582px ) {
    width: 20rem;
    height: 8rem;
  }
`

const Address = styled.div`
  margin-top: 5rem;
  color: white; 
  width: 100%; 
  text-align: center; 
`

const FooterTextContainer = styled.div`
  h2, a { 
    color: #FFFFFFFF; 
    font-size: 1.75rem;
  }
  
  a { font-size: 2rem; }
  position: absolute;
  left: 2.5rem;
  width: 30rem;
  bottom: 0.75rem;
  
`
export default function Contact() {
    const [viewHeight, setViewHeight] = useState(0)

    useEffect( () => {
      setViewHeight(window.innerHeight)
      window.addEventListener('resize', () => {
        setViewHeight(window.innerHeight)
      });
      
      const script = document.createElement("script");
      script.type = "text/javascript"
      script.async = true
      script.id = "artibot";
      script.setAttribute('crossorigin','SameSite=None')
      script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'31743cbc-72f3-4c39-91de-9447c14185d7'});a=!0}}}(window,document);"
      document.body.appendChild(script)

      return () => window.removeEventListener('resize', () => {
        setViewHeight(window.innerHeight)})
      }, [])
    return (
        <PageContainer vh={viewHeight}>
          <NavBar style={{zIndex: "1000"}}/>
          <BackgroundContainer />
          <TextContainer>
            <p>Make it yours</p>
            <ContactButton className="artibot-button-expand">QUOTE</ContactButton>
            <Link to="/">
              <Logo vh={viewHeight}/>
            </Link>
            <Address>
              <h2 style={{ fontSize: "2.5rem" }}>505 Talbot St. E.<br/> Aylmer, ON</h2>
            </Address>
          </TextContainer>
          <FooterTextContainer>
            <div style={{ 
                width: "75%" }}>
                <h2 style={{textAlign: "left"}}>JOHN<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
                <h2 style={{textAlign: "left"}}>VINCE<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
            </div>
          </FooterTextContainer>
        </PageContainer>
    );
}

