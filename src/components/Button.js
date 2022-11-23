import React from 'react';
import  styled  from 'styled-components';

const Btn = styled.button`
display:inline-block;
background-color:${props => props.theme.text};
color:${props => props.theme.body};
font-size:${props => props.theme.fontsm};
border:none;
outline:none;
border:none;
padding:0.9rem 2.3rem;
border-radius:50px;
transition:all 20.s ease;
position:relative;
&:hover{
    transform:scale(0.9);
}

&::after{
    content:' ';
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) scale(0);
    border:2px solid black;
    width:100%;
    height:100%;
    border-radius:50px;
    transition:all 0.2s ease;
}

&:hover::after{
    transform:translate(-50%,-50%) scale(1);
    padding:0.3rem;
}

`

const Link = styled.a`
color:white;
text-decoration: none;
`

const Button = ({text, link}) => {
  return (
    <div>
      <Btn>
        <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
        </Link>
      </Btn>
    </div>
  )
}

export default Button;
