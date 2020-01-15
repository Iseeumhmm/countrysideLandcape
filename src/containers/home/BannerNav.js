import React from 'react'
import styled from 'styled-components'
var Link = require('../../components/Router').Link

const NavList = styled.ul`
    margin-bottom: -4rem;
    padding: 0;
    padding-top: ${props => (props.secondary ? "0" : "1.2rem")};
    display: flex;
    justify-content: center;
    li {
        a { color: ${props => (props.secondary ? "#93D409" : "white")}; }
        font-size: 1.3rem;
        list-style-type:none;
        display: inline-block;
        padding: 0 .8rem;
    }
`

export default function BannerNav(props) {
   
    return (
        <NavList secondary={props.secondary}>
            <li><Link to="/about">ABOUT US</Link></li>
            <li style={{
                fontSize: "1.7rem", 
                marginTop: "-.1rem", 
                color: "#93D409",
                fontWeight: "bold"
                }}>
                <Link 
                    to="/pool-installs"
                    style={{color: "#93D409"}}
                    >OUR WORK
                </Link>
            </li>
            <li><Link to="/contact">CONTACT</Link></li>
        </NavList>
    )
}