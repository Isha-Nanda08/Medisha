import styled from "styled-components"

const Container=styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
    align-items: center;
    /* text-align: left; */
    font-size: 1.2rem;
    justify-content: left;
    transition: all ease 0.2s;
    &:hover{
        background-color: #689287;
        transform: translateY(-5px);
    }
`;

const Image=styled.img`
    width:20%;
    height: auto;
    /* transform: translate(); */
    align-items: left;
    align-items: flex-start;

`

const Desc=styled.a`
    text-decoration: none;
    justify-content: center;
    top: 0px;
    /* align-items: center; */
    padding-left: 5px;
    color: #121414;
    font-size: 1.2rem;
`
const SearchCondition = ({item}) => {
  return (
    <Container>
           <Image src={item.img}/> 
           <Desc>{item.desc}</Desc>
    </Container>
  )
}

export default SearchCondition