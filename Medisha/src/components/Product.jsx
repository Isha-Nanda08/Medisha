import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { motion } from 'framer-motion';
const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color:rgba(217, 236, 220, 0.208);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;


`

const Container =styled(motion.div)`
    flex: 1;
   
    margin: 15px;
    min-height:150px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    position: relative;
    transition:all 0.5s ease-out;
    
    
    &:hover ${Info}{
        opacity:1;
        transform: translateY(-5px);
        border: 1px solid #000;

    }
    

`
const Circle = styled.div`
 width:200px;
 height:200px;
 border-radius:50%;
 background-color: white;
 position: absolute;


`
const Image = styled.img`
height: 65%;
z-index: 2;

`

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;
    &:hover{
        background-color: teal;
        color: #fff;
        transform: scale(1.1);
        
    }

`


const Product = ({item}) => {
  return (
    <Container
     initial={{ opacity: 0, scale: 0.7}}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product