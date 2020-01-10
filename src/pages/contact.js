import React from "react";
import styled from 'styled-components'
import { Link } from 'components/Router'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ContactForm from '../containers/contactForm'
const logo = require('../images/logos/LargeLogo.png')
const map = require('../images/backgrounds/map.jpg')

// Styles

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
`
const MapContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    bottom: 6rem;
    background-image: url(${map});
    background-size: cover;
`
const TextContainer = styled.div`
  position: absolute;
  top: 5.5rem;
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
  height: 13rem;
  background-color: rgba( 0, 0, 0, .5);
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



export default function Contact() {


    return (
        <React.Fragment>
            <HeaderContainer>
                <MapContainer />
                <BannerOverlay/>
                <Link to="/"><Logo /></Link>
                <TextContainer>
                    <p>Let's make your vision a reality</p>
                </TextContainer>
            </HeaderContainer>
            <ContactForm />
        </React.Fragment>
    );
}

