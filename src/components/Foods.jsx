import React from 'react';
import styled from 'styled-components';
import pizza from '../__images__/pizza.jpg';
import fish from '../__images__/fish.jpg';
import pasta from '../__images__/pasta.jpg';
import Food from './Food';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  z-index: 1000;
`;
const ContainerFoods = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const Foods = () => (
  <Container>
    <ContainerFoods>
      <Food name="PIZZA" img={pizza} />
      <Food name="FISH" img={fish} />
      <Food name="PASTA" img={pasta} />
    </ContainerFoods>
  </Container>
);
export default Foods;
