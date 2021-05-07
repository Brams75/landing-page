import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import Foods from './components/Foods';
import Table from './components/Table';
import Menu from './components/Menu';
import Comment from './components/Comment';
import Footer from './components/Footer';

import pastaMenuImage from './__images__/pastaMenu.jpg';
import pasta1MenuImage from './__images__/pasta1Menu.jpg';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  font-family: sans-serif;
  scroll-behavior: smooth;
`;

const App = () => (
  <Container>
    <Header />
    <Banner />
    <Foods />
    <Table />
    <Menu img={pastaMenuImage} />
    <Comment />
    <Menu img={pasta1MenuImage} />
    <Table orange />
    <Footer />
  </Container>
);
export default App;
