import styled from "styled-components"
import logo from "../assets/logo.png";
import Search from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react";
import { Link } from "react-router-dom";


const Container=styled.div`
z-index: 20;
    font-weight: 400;
    display: flex;
    flex-direction:column;
    color: #000;
    height: 50px;
    background-color: #fff;
    position: sticky;
    margin:0;
    background-position: center;
    /* overflow: hidden; */
    /* position: sticky; */
    top: 0;
    `
    /* top: 30px;` */

const Wrapper=styled.div`
    /* padding: 0px 3px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* margin: 0 auto; */
    /* max-width: 1200px; */
   
    `



const Left=styled.div`
    flex:1;
    padding-left:15px;
    display: flex;
    align-items: center;
`

const Center=styled.div`
    flex: 1;
    text-align:center;
`

const Right=styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    padding-right:15px;
`

const Logo=styled.a`
    width: 50px;
    height: 50px;
    /* border: 1px solid black; */
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        background-color:#36807b3d ;
    }
    
`

const Address=styled.div`
    display: flex;
    align-items: center;
    /* margin-left: 10px; */
    font-size: 14px;
    margin-left: 15px;
    cursor:pointer;
    position:relative;

`

const MenuItem=styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 25px;
    position:relative;
    /* height:100%; */
    
    padding: 15px 15px;
    
    &:hover{
        background-color:#${props=>props.change="121414"};
        border-radius: 4px;
        transform:scale(1.08);

    }
    

`
const MenuItem2=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    position:relative;
    

`
const Icon=styled.div`
     position: 'absolute';
    /* opacity:0; */
    /* left: 0;// Adjust these values to overlap as needed */
    z-index: 2;// Ensure it appears above the address text
    transition:opacity 0.3s ease-in-out; // Smooth transition effect
    opacity: ${props=>props.isHovered ? 1 : 0};
    /* pointer-events: none; */
    margin-left: 5px;
    margin-top: 5px;
    
`
const Addr=styled.div`
background-color:#e8e2ee62;
position:absolute;
z-index:1;
        opacity: ${props=>props.isHovered ? 0 : 1};
        transition:opacity 0.3s ease-in-out;
        

`;


const Image=styled.img`
    width: 50px;
    /* &:hover{
        transform: scale(1.1);
    } */
    
`

const Menu=styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #36807b;
    border: 1px solid #ccc;
    padding: 10px;
    position: sticky;
    left:0;
    top:50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:0;
    color: #fff;
    font-weight:600;

`

const Navbar = () => {
    const [isHovered , setIsHovered] = useState(false);
  return (
   <Container>
        <Wrapper>
            <Left>
                <Logo href="/">
                    <Image src={logo}/>
                </Logo>
                <Address onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                    <Addr isHovered={isHovered}>ADDRESS</Addr>
                    
                    <Icon isHovered={isHovered}>
                    <HomeOutlinedIcon/>
                    </Icon>
                </Address>
            </Left>
            <Center></Center>
            <Right>
                    {/* <MenuItem>REGISTER</MenuItem> */}
                    <MenuItem2>
                         <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                         </Badge>
                    </MenuItem2 >
                    <Link to="/Login" style={{textDecoration:"none"}}>SIGN IN</Link>
            </Right>
        </Wrapper>
        <Wrapper>
            <Menu>
                <MenuItem change="121414">Our Products</MenuItem>
                <MenuItem change="121414">Personal Care</MenuItem>
                <MenuItem change="121414">Women Care</MenuItem>
                <MenuItem change="121414">Baby Care</MenuItem>
                <MenuItem change="121414">Health Devices</MenuItem>
                <MenuItem change="121414">Ayurveda</MenuItem>
                <MenuItem change="121414">Nutritional Drinks and Suppliments</MenuItem>
                <MenuItem change="121414">Need a Doctor?</MenuItem>

            </Menu>
        </Wrapper>
   </Container>
  )
}

export default Navbar