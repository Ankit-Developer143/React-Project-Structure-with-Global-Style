import React from 'react';
import  styled  from 'styled-components';
import { keyframes} from "styled-components";
import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
`;

const move = keyframes`
0%{transform:translateX(100%)};
100%{transform:translateX(-100%)};
`

const Row = styled.div`
  background-color:lightblue;
  white-space:nowrap;
  box-sizing:content-box;
  margin:2rem 0;
  display:flex;
  animation:${move} 20s linear infinite ${props =>props.direction};

  div{
    width:5rem;
    height:5rem;
    margin:2rem;
    padding:2rem;
    background-color:yellow;
  }
`;

const ImageContainer = styled.div`
width:15rem;
margin:0 auto;
background-color:${props => props.theme.body};
border-radius:20px;
cursor:pointer;

img{
  width:100%;
  height:auto;
}
`

const CardItems = ({img, number=0, price=0}) =>{
  return (
    <ImageContainer>
      <img src={img} alt="dummy Data" />
    </ImageContainer>
  )
}

const Showcase = () => {
  return (
    <Section>
      <Row direction='none'>
      <CardItems img={img1}/>
      <CardItems img={img2}/>
      <CardItems img={img3}/>
      <CardItems img={img4}/>
      <CardItems img={img5}/>
      </Row>
      <Row direction='reverse'>
      <CardItems img={img6}/>
      <CardItems img={img7}/>
      <CardItems img={img8}/>
      <CardItems img={img9}/>
      <CardItems img={img1}/>
      </Row>
    </Section>
  )
}

export default Showcase;
