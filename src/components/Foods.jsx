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
`;

const Foods = () => (
  <Container>
    <Food name="PIZZA" img={pizza} />
    <Food name="FISH" img={fish} />
    <Food name="PASTA" img={pasta} />
  </Container>
);
export default Foods;
