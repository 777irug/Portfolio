import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const Logo2 = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;


const LogoComponent = (props) => {
    return (
      <a href="https://portfolio-guri.vercel.app/">
        <Logo color={props.theme}>AS</Logo>
      </a>
    );
}

export default LogoComponent
