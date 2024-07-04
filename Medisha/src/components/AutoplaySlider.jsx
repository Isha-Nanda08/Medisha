import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  margin: 0px auto;
  position: relative;
  background-color: #86888825;
`;

const SlideImage = styled.div`
  position: relative;
  width: 80%;
  height: 200px;
  padding: 40px 40px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  opacity: 1; 
  filter: blur(0); 
  &:hover {
     /* Blur on hover */
    opacity: 0.8; /* Scale up on hover */
    
    border: 2px solid #000;
    
    .button-container {
      display: flex;
      opacity: 1;
     
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: none;
  transition: display 0.3s ease; /* Smooth 
  transition for display */
  opacity: 0;
  ${SlideImage}:hover & {
    display: flex;
    opacity: 1;
  }
`;

const Button = styled.button`
background-color: #fff; 
  background-color: #ffffff;
  color: #000000;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 10px;
  &:hover{
    background-color: #094b4b;
    color: #fff;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #9d8b8b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Div = styled.div`
  width: 80%;
  height: 200px; // Adjust the height as needed
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomPrevArrow = ({ onClick }) => (
  <Arrow direction="left" onClick={onClick}>
    <ArrowBackIosOutlined />
  </Arrow>
);

const CustomNextArrow = ({ onClick }) => (
  <Arrow direction="right" onClick={onClick}>
    <ArrowForwardIosOutlined />
  </Arrow>
);

const AutoplaySlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,  // Disable default arrows
  };

  const handleClickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        <Div>
          <SlideImage
            src="https://www.cofsils.com/uploadfile/sub_product/c2.png"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        <Div>
          <SlideImage
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        <Div>
          <SlideImage
            src="https://images-cdn.ubuy.co.in/6548727cf6f2517974778419-pepto-bismol-ultra-caplets-for-upset.jpg"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        <Div>
          <SlideImage
            src="https://images-cdn.ubuy.co.in/6548727cf6f2517974778419-pepto-bismol-ultra-caplets-for-upset.jpg"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        <Div>
          <SlideImage
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        <Div>
          <SlideImage
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png"
          >
            <ButtonContainer className="button-container">
              <Button>Add</Button>
              <Button>Buy</Button>
            </ButtonContainer>
          </SlideImage>
        </Div>
        {/* Add more slides as needed */}
      </Slider>
      <CustomPrevArrow onClick={handleClickPrev} />
      <CustomNextArrow onClick={handleClickNext} />
    </Container>
  );
};

export default AutoplaySlider;
