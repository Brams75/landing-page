/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import pizza from '../__images__/pizza.jpg';
import fish from '../__images__/fish.jpg';
import pasta from '../__images__/pasta.jpg';
import Food from './Food';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 40vh;
  padding: 4rem;
`;
const ContainerFoods = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
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
