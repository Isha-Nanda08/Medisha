import styled from "styled-components"
import {searchConditions} from "../data";
import SearchCondition from "./SearchCondition";

const Container=styled.div`
margin-top:48px;
display: block;
    align-items: center;
    justify-content: left;
    border: 5px solid black;
    border-radius: 5px;
    padding:20px;
    background-color: #F7FFF8;
`
const SearchHealth=styled.div`
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4 - 16px), 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    /* display: grid !important; */
    grid-gap: 6px;
    grid-auto-flow: row;
    width: 100%;
    margin-top: 20px;`

  
    const Title =styled.div`
      display: block;
    align-items: center;
    justify-content: left;
    text-align: left;
    font-size: 1.5rem;
    font-weight:bolder ;
    letter-spacing: 0.5px;
    padding: 2px 5px;
    `
const SearchByConditions = () => {
  return (
    <Container>
      <Title>Search By Health Conditions</Title>
      <SearchHealth>
        {searchConditions.map(item => (
                    <SearchCondition item={item} key={item.id}/> 
                ))
            }
          </SearchHealth>
    </Container>
  )
}

export default SearchByConditions