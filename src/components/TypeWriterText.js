import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxx};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-top: 50px;
  width: 80%;
  align-self: flex-start;
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 20px 0px;
  align-self: flex-start;
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
              .typeString("Hello World!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Collectible Items.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Ape Killers")
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
