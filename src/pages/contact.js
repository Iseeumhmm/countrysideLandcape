import React, { useEffect } from "react";
import styled from 'styled-components'
import { Link } from 'components/Router'
import '../artibot.css'
import ContactForm from '../containers/contactForm/contactForm'
const logo = require('../images/logos/LargeLogo.png')
const map = require('../images/backgrounds/map.jpg')

// Styles

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
`
const MapContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${map});
    background-size: cover;
`
const HeaderTextContainer = styled.div`
  position: absolute;
  top: 10rem;
  width: 100%;
  p {
      color: #fff;
      font-weight: 300;
      font-size: 2.25rem;
  }
`
const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  /* background-color: rgba( 0, 0, 0, .7); */
`
const Logo = styled.div`
  position: absolute;
  left: calc(50% - 1rem);
  transform: translateX(-50%);
  margin:  1rem 0 1rem;
  width: 23rem;
  min-height: 7rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
// const FormContainer = styled.div`
//   position: absolute;
//   top: 25rem !important;
//   width: 95%;
//   left: 50%;
//   transform: translateX(-50%);
// `

const ContactButton = styled.button`
  background-color: #93D409;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 2rem;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0, .3);
  font-size: 1.75rem;
  z-index: 200;
  width: 20rem;
  height: 4rem;
  @media( min-width: 582px ) {
    width: 20rem;
    height: 8rem;
  }
`

const FooterTextContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  h2, a { 
    color: #FFFFFFFF; 
    font-size: 2rem;
  }
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 35rem;
  text-align: center;
  bottom: 6rem;
  
`
export default function Contact() {

    useEffect(() => {
      const script = document.createElement("script");
      script.type = "text/javascript"
      script.async = true
      script.id = "artibot";
      script.setAttribute('crossorigin','SameSite=None')
      script.innerHTML = "!function(t,e){t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};var a=!1,i=e.createElement('script');i.async=!0,i.type='text/javascript',i.src='https://app.artibot.ai/loader.js',e.getElementsByTagName('head').item(0).appendChild(i),i.onreadystatechange=i.onload=function(){if(!(a||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState)){new window.ArtiBot({i:'31743cbc-72f3-4c39-91de-9447c14185d7'});a=!0}}}(window,document);"
      document.body.appendChild(script)
      // return () => script.parentNode.removeChild( script );
    }, [])
    return (
        <PageContainer>
            <MapContainer />
            <BannerOverlay/>
            <Link to="/"><Logo /></Link>
            <HeaderTextContainer>
                <p>Let's make your vision a reality</p>
                <ContactButton className="artibot-button-expand">GET A QUOTE</ContactButton>
            </HeaderTextContainer>
            {/* <FormContainer>
                <ContactForm />
            </FormContainer> */}
            <FooterTextContainer>
              <h2 style={{ fontSize: "2.5rem" }}>505 Talbot St. E.<br/> Aylmer, ON</h2>
              <div style={{ 
                  width: "75%", 
                  margin: "auto",
                  paddingBottom: "2rem" }}>
                  <h2 style={{textAlign: "left"}}>JOHN<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
                  <h2 style={{textAlign: "left"}}>VINCE<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
              </div>
            </FooterTextContainer>
        </PageContainer>
    );
}

