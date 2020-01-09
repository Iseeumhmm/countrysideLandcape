import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'

const logo = require('../images/logos/LargeLogo.png')

// Styles
const PageContainer = styled.div`
  width: 85%;
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
const TextContainer = styled.div`
  padding: 8rem 0 0;
  h1 {
    text-align: center;
  }
  p {
    padding-top: 2rem;
  }
  b {
    font-weight: 700;
  }
  &:last-child {
    padding-bottom: 8rem;
  }
`

export default function About() {
  return (
    <PageContainer>
      <HeaderContainer>
        <Link to="/"><Logo /></Link>
      </HeaderContainer>
      <TextContainer>
        <h1>Our Story</h1>
        <p><b>Countryside Landscape</b> was established in the spring of 2008 by owner John Wall on a small scale performing interlocking stone installations. The business saw rapid expansion to include excavations, demolitions, carpentry, concrete work, wood structures and pavilions as a result of high quality workmanship.
        Today we are a trusted landscape company with the experience, knowledge and staff to create your landscape dream or property improvement safely, efficiently and affordably. Our team has grown to include a strong, friendly and professional staff including most recently our own landscape designer Vincent Long. He brings years of passionate design experience working for a private residential landscape architecture firm in Ottawa.
        </p>
      </TextContainer>
      <TextContainer>
        <h1>Our Mission</h1>
        <p>At Countryside Landscape, we hire only the best employees and provide excellent service to our vast clientele. Whether your project scope is a small pocket garden in a downtown location or a sprawling country estate, we are committed to excellence in every stage of our project. We are confident that the design resolution will be unique to your property and incorporate your requirements in a seamless manner to allow you your own slice of paradise. Our mission then is to provide you an exciting &amp; effortless experience throughout the planning &amp; construction phases and get you outside enjoying your tailored garden.
        </p>
      </TextContainer>
      <TextContainer>
        <h1>Our Commitment</h1>
        <p>It is imperative to provide safe working practices for our employees, and safe working environments for our clients. We endeavour to assemble a staff of sincere, hardworking individuals so that we may be accountable to each other and our clients. We know the importance of listening, understanding and the value of supporting each other through teamwork. We not only teach, but we learn from others – we build together.
        </p>
      </TextContainer>
      <TextContainer>
        <h1>Our Vision</h1>
        <p>To assemble a friendly, professional staff who will cater to our clients’ needs by offering services and products that create beautiful outdoor living spaces.
        </p>
      </TextContainer>
  </PageContainer>
  )
}

