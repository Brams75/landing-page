import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
`;

const App = () => (
  <Container>
    <Header />
  </Container>
);
export default App;
