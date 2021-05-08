import React from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import { HeaderContactNumber, HeaderContactNumberOrange } from './Header';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
`;

const Footer = () => (
  <Container>
    @ 2020-2021 All Right Reserved | Coded by abram.pomposelli1@gmail.com
    <HeaderContactNumber>
      <CallIcon data-testid="callIcon" />
      Call Us Today
      <HeaderContactNumberOrange>+1 800 567 1234</HeaderContactNumberOrange>
    </HeaderContactNumber>
  </Container>
);
export default Footer;
