import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from 'components/Router'
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
  background-color: rgba( 0, 0, 0, .7);
`
const Logo = styled.div`
  position: absolute;
  left: 0;
  margin:  1rem 0 0 1rem;
  width: 8rem;
  min-height: 4rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`
const FormContainer = styled.div`
  position: absolute;
  top: 25rem !important;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
`
const FooterTextContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  text-align: center;
  bottom: 1rem;
  a { color: black; }
`
export default function Contact() {

    const [count, setCount] = useState(0);

    return (
        <PageContainer>
            <MapContainer />
            <BannerOverlay/>
            <Link to="/"><Logo /></Link>
            <HeaderTextContainer>
                <p>Let's make your vision a reality</p>
            </HeaderTextContainer>
            <FormContainer>
                <ContactForm />
            </FormContainer>
            <FooterTextContainer>
                <div style={{ 
                    width: "65%", 
                    margin: "auto",
                    paddingBottom: "3rem" }}>
                    <h2 style={{textAlign: "left"}}>JOHN<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
                    <h2 style={{textAlign: "left"}}>VINCE<a href="tel: 519-619-9593" style={{float: "right"}}>(519) 619-9593</a></h2>
                </div>
                <h2>505 Talbot St. E., Aylmer, ON</h2>
            </FooterTextContainer>
        </PageContainer>
    );
}

