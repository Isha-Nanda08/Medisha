import Search from "@mui/icons-material/Search" ;
import styled from "styled-components";
import backgroundImage from "../assets/ack-medisha.png";

const Container=styled.div`
  top:48px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex:1; */
    /* margin:3px; */
    /* height:50vh; */
    z-index:3;
    position:relative;
    /* transition:all 0.5s ease; */
    /* background-color:#00000099; */
    /* object-fit:cover; */
    overflow:hidden;
    height: 180px;
        overflow: auto;
        width: 100%;
        background: #0c3a36;

`;
const Wrapper=styled.div`
/* padding:20px; */
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


  background-position: -20% 100%, 120% 100%;
        background-size: 250px;
        /* max-width: 1340px; */
        width:100%;
        height: 100%;
        margin: 0 auto;
        background-image: url(${backgroundImage});
        background-position: 0 100%, 100% 100%;
        background-repeat:repeat;
`;
const SearchContainer=styled.div`
        padding: 20px 0px;
        height:95%;
        width: 728px;
        text-align: center;
        background-color: #1a3131;
        border: 4px solid black;
        border-radius: 10px;
        margin-top: 0px;`;
const MainSearch=styled.div`
width: 100%;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    border-radius: 8px;
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    /* -webkit-align-items: center; */
    justify-content: flex-start;
    /* justify-content: flex-start; */
    flex-direction: row;
    background: #f7f7f7;
    text-align: center;
    height: 40px;
    position: sticky;
    z-index: 59;
    top: 0;
    margin-top: 0;
    color: #000;
`;
const Title=styled.h1`
font-size: 30px;
    margin-bottom: 24px;
    margin-top: 0px;
    /* top:0; */
    line-height: 36px;
    font-weight: 700;
    color: #fff;
`;
const Input=styled.div`
color:#000;
border: none;`

const Searchdiv = () => {
  return (
    <Container>
        <Wrapper>
          <SearchContainer>
            <Title>Search your product here</Title>
            <MainSearch>
                    <Input placeholder="Search"/>
                    <Search style={{fontSize:16}}/>
            </MainSearch>
                        </SearchContainer>
        </Wrapper>
    </Container>
  )
}

export default Searchdiv