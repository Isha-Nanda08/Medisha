import styled from "styled-components" 
import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';
import { Button } from "@mui/material";
import {sliderItems} from "../data";
import { useState } from "react";



const Container=styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    overflow: hidden;
   

`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #9d8b8b;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper=styled.div`
    height:50%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props=> props.slideIndex * -100)}vw);
    /* flex-direction:column; */
`

const Slide=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color:${props=>props.bg};
`
const ImgContainer=styled.div`
    flex: 1;
    height: 100%;

`

const Image=styled.img`
    height: 40%;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
    color: #000;
`;

const Title=styled.h1`
    font-size:70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
// const Button=styled.button`
//     border:2px solid #000;
// `

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0?  slideIndex-1:8);
        }
        else{
            setSlideIndex(slideIndex <8?  slideIndex+1:0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
            {sliderItems.map((item)=>(

            <Slide  key={item.id}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Desc>{item.desc}</Desc>
                <Button>BUY NOW</Button>
            </InfoContainer>
            </Slide>
         ))}   
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider