import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import Foods from './components/Foods';
import Table from './components/Table';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  font-family: sans-serif;
`;

const App = () => (
  <Container>
    <Header />
    <Banner />
    <Foods />
    <Table />
  </Container>
);
export default App;
