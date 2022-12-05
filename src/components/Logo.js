import React from 'react';
import  styled  from 'styled-components';

const LogoText = styled.h1`
font-family:'Akaya Telivigala', cursive;
font-size:${(props) =>props.theme.fontxxxl};
cursor: pointer;

@media(max-width:64em){
  font-size:${(props) =>props.theme.fontxxl}
}


  &:hover{
    transition: all 0.2s ease;
    transform: scale(1.2);

  }

`

const Logo = () => {
  return (
    <LogoText>
      w.
    </LogoText>
  )
}

export default Logo;
