import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 48px;
  display: block;
  align-items: center;
  justify-content: left;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;
  background-color: #F7FFF8;
`;

const Title = styled.div`
  display: block;
  align-items: center;
  justify-content: left;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bolder;
  letter-spacing: 0.5px;
  padding: 2px 5px;
`;

const Img = styled.img`
  width: 90%;
  height: 100vh;
  border-radius: 5px;
  margin-top: 10px;
`;

const Desc = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const Remedies = styled.div`
  margin-top: 20px;
`;

const Products = styled.div`
  margin-top: 20px;
`;

const Doctor = styled.div`
  margin-top: 20px;
`;

const Condition = ({ id }) => {
  // Assuming you have a function to get the condition data by id
  // For simplicity, using mock data here
  const condition = {
    title: 'Example Condition',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description of the condition.',
    remedies: ['Remedy 1', 'Remedy 2'],
    products: ['Product 1', 'Product 2'],
    doctor: 'Dr. Example'
  };

  const fetchConditionData = (id) => {
    return condition;
  };

  const data = fetchConditionData(id);

  return (
    <Container>
      <Title>{data.title}</Title>
      <Img src={data.image} alt={data.title} />
      <Desc>{data.description}</Desc>
      <Remedies>
        {data.remedies.map((remedy, index) => (
          <p key={index}>{remedy}</p>
        ))}
      </Remedies>
      <Products>
        {data.products.map((product, index) => (
          <p key={index}>{product}</p>
        ))}
      </Products>
      <Doctor>
        <p>{data.doctor}</p>
      </Doctor>
    </Container>
  );
};

export default Condition;
