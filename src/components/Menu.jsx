import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const MenuLeft = styled.div`
  width: 35vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const MenuLeftText = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const MenuImage = styled.img`
  object-fit: cover;
  width: 30vw;
  height: 35vh;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const MenuRight = styled.div`
  width: 35vw;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const MenuTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const MenuRightText = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Menu = ({ img }) => (
  <Container>
    <MenuLeft>
      <MenuLeftText>
        <MenuTitle>FOOD</MenuTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </MenuLeftText>
    </MenuLeft>
    <MenuImage src={img} />
    <MenuRight>
      <MenuRightText>
        <MenuTitle>DELICIOUS</MenuTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </MenuRightText>
    </MenuRight>
  </Container>
);

Menu.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Menu;
