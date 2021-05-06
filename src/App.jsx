import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner';
import Header from './components/Header';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
`;

const App = () => (
  <Container>
    <Header />
    <Banner />
  </Container>
);
export default App;
