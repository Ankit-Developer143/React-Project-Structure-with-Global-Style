import React from 'react';
import  styled  from 'styled-components';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  border-top:2px solid ${props => props.theme.text};
  border-top:2px solid ${props => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;


const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
cursor: pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.carouselColor};
margin: 3rem 0;
`;

const Faq = () => {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let element = ref.current;
        ScrollTrigger.create({
            trigger:element,
            start:'top top',
            end:'bottom top',
            pin:true,
            pinSpacing:false,
            scrub:true,
            // markers:true,
        })
        return () => {
            ScrollTrigger.killAll();
        }
    }, [])
    
  return (
    <Section ref={ref}>
     <Title>Faq</Title>
     <Container>
      {/* <Box>
        Title
      </Box> */}
     </Container>

    </Section>
  )
}

export default Faq;
