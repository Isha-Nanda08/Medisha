import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #d9ecdc;
`;
const ContainerItem =styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`
const Title=styled.h1`
    
`


const Products = () => {
  return (
    <Container>
        <Title>Popular Search</Title>
        <ContainerItem>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
        </ContainerItem>
    </Container>
  )
}

export default Products

