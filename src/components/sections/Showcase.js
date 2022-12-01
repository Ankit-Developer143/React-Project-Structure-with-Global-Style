import React, {useRef} from 'react';
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
import ETH from '../../assets/icons8-ethereum-48.png';



const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  position: relative;

  &>*:first-child{
    animation-duration:20s;
  }

  &>*:last-child{
    animation-duration:15s;
  }
`;

const move = keyframes`
0%{transform:translateX(100%)};
100%{transform:translateX(-100%)};
`

const Row = styled.div`
  ${'' /* background-color:lightblue; */}
  white-space:nowrap;
  box-sizing:content-box;
  margin:2rem 0;
  display:flex;
  animation:${move}  linear infinite ${props =>props.direction};

  ${'' /* div{
    width:5rem;
    height:5rem;
    margin:2rem;
    padding:2rem;
    background-color:yellow;
  } */}
`;

const ImageContainer = styled.div`
width:20rem;
height:100%;
margin:0 1rem;
background-color:${props => props.theme.body};
border-radius:20px;
cursor:pointer;

img{
  width:100%;
  height:auto;
}
`;

const Details = styled.div`
display:flex;
justify-content:space-between;
padding:0.8rem 1rem;
background-color:${props => props.theme.text};
border:2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
border-bottom-left-radius:20px;
border-bottom-right-radius:20px;


span{
  font-size:${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight:600;
  line-height:1.5rem;
}

h1{
  font-size:${props => props.theme.fontmd};
  color:${props => props.theme.body};
  font-weight:600;
}
`;

const Price = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;

  img{
    width:1rem;
    height:auto;
  }
`

const CardItems = ({img, number=0, price=0, passRef}) =>{

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }

  let paused = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }
  return (
    <ImageContainer onMouseOver={e => paused(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="dummy Data" />
      <Details>
       <div>
       <span>weirdo</span>
        <h1>#{number}</h1>
        </div>
        <div>
        <span>Price</span>
        <Price>
          <img src={ETH} alt="price" />
        <h1>{Number(price).toFixed(1)}</h1>
        </Price>
       </div>
      </Details>
    </ImageContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section>
      <Row direction='none' ref={Row1Ref}>
      <CardItems img={img1} number={820} price={12.5} passRef={Row1Ref}/>
      <CardItems img={img2} number={220} price={11.5} passRef={Row1Ref}/>
      <CardItems img={img3} number={420} price={1.51} passRef={Row1Ref}/>
      <CardItems img={img4} number={620} price={12.5} passRef={Row1Ref}/>
      <CardItems img={img5} number={520} price={21.50} passRef={Row1Ref}/>
      </Row>
      <Row direction='reverse' ref={Row2Ref}>
      <CardItems img={img6} number={320} price={12.5} passRef={Row2Ref}/>
      <CardItems img={img7} number={920} price={21.5} passRef={Row2Ref}/>
      <CardItems img={img8} number={200} price={18.5} passRef={Row2Ref}/>
      <CardItems img={img9} number={320} price={15.5} passRef={Row2Ref}/>
      <CardItems img={img1} number={120} price={33.5} passRef={Row2Ref}/>
      </Row>
    </Section>
  )
}

export default Showcase;
