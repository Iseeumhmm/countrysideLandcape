import React from 'react'
import styled from 'styled-components'
var Link = require('../../components/Router').Link

const NavList = styled.ul`
    margin-bottom: -4rem;
    padding: 0;
    padding-top: 1.2rem;
    display: flex;
    justify-content: center;
    li {
        font-size: 1.3rem;
        list-style-type:none;
        display: inline-block;
        padding: 0 .8rem;
    }
`

export default function BannerNav() {
    return (
        <NavList>
            <li><Link to="/about">ABOUT US</Link></li>
            <li style={{
                fontSize: "1.7rem", 
                marginTop: "-.1rem", 
                color: "#FDBB31",
                fontWeight: "bold"
                }}>
                <Link 
                    to="/our-work"
                    style={{color: "#FDBB31"}}
                    >OUR WORK
                </Link>
            </li>
            <li>CONTACT</li>
        </NavList>
    )
}