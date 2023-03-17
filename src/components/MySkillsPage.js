import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  margin-top: 2rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  
  width: 30vw;
  height: 75vh;
  z-index:3;
  line-height: 1;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.4em + 1vw);
padding: 0.3rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} />Ui/Ux Designer
</Title>

<Description>
<ul>
<br></br>
    <li>
        Creating designing user interfaces that are visually appealing, intuitive, and easy to use
    </li>
<br></br>
    <li>
        Creating wireframes, prototypes, and mockups to communicate design ideas
    </li>
<br></br>
    <li>

        Collaborating with developers and other stakeholders to ensure designs are implemented correctly
    </li>
<br></br>
    <li>
        Testing designs with users to gather feedback and make iterative improvements
    </li>
<br></br>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    <li>
       Adobe Creative Suite
    </li>
    <li>
       Adobe xd
    </li>
    <li>
       Sketch
    </li>
    <li>
       Fluid Ui
    </li>
    <li>
       Illustrator and More...
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} />Front-End Developer
</Title>

<Description>
<ul>
<br></br>
    <li>
        Turning designs into functioning web applications or websites.
    </li>
<br></br>
    <li>
        Ensuring websites or applications work well on various devices and screen sizes
    </li>
<br></br>
    <li>
        Communicating effectively and working collaboratively with team members to meet project goals and requirements.
    </li>
<br></br>
    <li>
        Minimizing page load times and improving user experience.
    </li>
<br></br>
</ul>
</Description>
<Description>
<strong>Skills</strong>
<ul>
    <li>
       HTML5
    </li>
    <li>
       CSS3 & CSS5
    </li>
    <li>
       JavaScript & jQueary
    </li>
    
    <li>
       React Js
    </li>
    <li>
    GSAP
    </li>
    <li>
    SaSS
    </li>
    <li>
    TAILWIND
    </li>
    
</ul>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
