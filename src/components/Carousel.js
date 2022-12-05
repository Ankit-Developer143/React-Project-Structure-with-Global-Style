import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import styled from "styled-components";
import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";

const Container = styled.div`
  width: 20vw;
  height: 40vh;

  img {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 70em) {
    margin-top: 20px;
    height: 60vh;
  }

  @media (max-width: 64em) {
    margin-top: 20px;
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    margin-top: 20px;
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 30em) {
    margin-top: 20px;
    height: 35vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Carousel() {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="The weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="The weridos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Carousel;
