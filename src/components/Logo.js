import React from 'react';
import  styled  from 'styled-components';

const LogoText = styled.h1`
font-family:'Akaya Telivigala', cursive;
font-size:${(props) =>props.theme.fontxxxl}
`

const Logo = () => {
  return (
    <LogoText>
      w.
    </LogoText>
  )
}

export default Logo;
