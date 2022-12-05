import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxx};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  margin: 20px 10px;

  @media(max-width:70em){
    font-size:${(props) =>props.theme.fontxl}
  }

  @media(max-width:48em){
    align-self: center;
    text-align: center;
  }

  @media(max-width:40em){
    width: 90%;
  }

  .text-1{
    color: blue;
  }
  .text-2{
    color: orange;
  }
  .text-3{
    color: red;
  }
  
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-top: 50px;
  width: 80%;
  align-self: flex-start;
  margin: 0 10px;

  @media(max-width:40em){
    font-size:${(props) =>props.theme.fontmd}
  }

  @media(max-width:48em){
    align-self:center;
    text-align:center;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  /* margin: 20px 0px; */
  /* align-self: flex-start;
  justify-content: flex-start;
  align-items: flex-start; */
  /* background-color: red; */

  margin: 10px 0;

  @media(max-width:48em){
    align-self:center;
    text-align:center;

    button{
      margin:0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class='text-1'>Hello World</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-2'>Collictable Item</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-3'>Ape Killer</span>`)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Subtitle</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
