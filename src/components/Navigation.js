import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';


const Section = styled.section`
width:100vw;
background-color:${props => props.theme.body};
`;

const NavBar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
width:85%;
height:${(props) => props.theme.navHeight};
margin: 0 auto;

`;

const Menu = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;

`;

const MenuItem = styled.li`
margin:0 1rem;
list-style:none;
color:${props => props.theme.text};
cursor:pointer;


&::after{
    content:' ';
    display:block;
    width:0%;
    height:2px;
    background-color:${props => props.theme.text};
    transition:width 0.3s ease;

}

&:hover::after{
    width:100%;
}

`;


const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
       <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>RoadMap</MenuItem>
        <MenuItem>ShowCase</MenuItem>
       </Menu>
       <Button text="Connect Wallet" link="https://www.google.com"/>
      </NavBar>
    </Section>
  )
}

export default Navigation;
