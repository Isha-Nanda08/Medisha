// AutoplaySlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Container = styled.div`
  margin-top:50px;
  width: 100%;
  margin: 0px auto;
  position: relative;
  background-color: #86888825;
`;

const SlideImage = styled.img`
  width: 90%;
  height: 15%;
  &:hover{
    cursor: pointer;
    border: 2px solid #000;
  }
`;

const AutoplaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <SlideImage src="https://www.cofsils.com/uploadfile/sub_product/c2.png" alt="Slide 1" />
        </div>
        <div>
          <SlideImage src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png" alt="Slide 2" />
        </div>
        <div>
          <SlideImage src="https://images-cdn.ubuy.co.in/6548727cf6f2517974778419-pepto-bismol-ultra-caplets-for-upset.jpg" alt="Slide 3" />
        </div>
        <div>
          <SlideImage src="https://images-cdn.ubuy.co.in/6548727cf6f2517974778419-pepto-bismol-ultra-caplets-for-upset.jpg" alt="Slide 3" />
        </div>
        <div>
          <SlideImage src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png" alt="Slide 2" />
        </div>
        <div>
          <SlideImage src="https://5.imimg.com/data5/SELLER/Default/2022/10/NQ/WD/YO/160829692/2-3--500x500.png" alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </Container>
  );
};

export default AutoplaySlider;
