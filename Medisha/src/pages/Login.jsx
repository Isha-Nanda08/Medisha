import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";



const Container=styled.div`
      width: 100v;
    height: 100vh;
    display: flex;
    background-color:#c6e7f946;
    align-items: center;
    justify-content: right;
`;

const Wrapper=styled.div`
    width:40%;
    height: 70%;
    padding: 20px;
    background-color: #ffffffa1;
    
    border-radius: 10px;
    /* border: 1px solid #000; */
    margin-right: 40px;
    margin-left: 0px;
    box-shadow: 0px 0px 10px 0px #000000;
    z-index: 10;
   

`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form=styled.form`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction:column;
    /* align-items: center; */

`;


const Input=styled.input`
    min-width: 40%;
    margin:15px 0px;
    padding: 10px;

`;



const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #074747;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    align-self: center;
    &:hover{
        background-color: teal;
        opacity: 0.8;
        }
`;
const Link=styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    color: #080808;
    align-self:center;
    &:hover{
        color: teal;
        opacity: 0.8;
        }
`;
const Image=styled.img`

    width:120vh;
    height:100%;
    margin: 0px 0px 0px 0px;
    /* align-self:center; */
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.7;
    

`; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleEvent=async (e)=>{
        e.preventDefault();
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
        
        setError('');
        try {
            // Mock API request (replace with your actual API call)
            // const response = await fetch('/api/login', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ username, password }),
            // });
      
            // if (!response.ok) {
            //   throw new Error('Login failed. Please try again.');
            // }
      
            // Handle successful login
            // const data = await response.json();
            // console.log('Login successful', data);
      
            // Navigate to the homepage or another route
            navigate('/'); // Redirect to home or another route
          } catch (error) {
            setError(error.message);
          }
        };

    
    return (
    
    <Container>
        <Image src='https://www.holdings.toppan.com/en/news/2020/08/t5v1940000000jq1-img/Todokusuri.jpg'/>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onClick={handleEvent}>
            <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Login