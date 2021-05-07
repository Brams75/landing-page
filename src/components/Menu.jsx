import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
`;
const MenuLeft = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const MenuLeftTitle = styled.div``;
const MenuImage = styled.img`
  object-fit: cover;
  width: 30vw;
  height: 35vh;
`;
const MenuRight = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const MenuRightTitle = styled.div``;

const Menu = ({ img }) => (
  <Container>
    <MenuLeft>
      <MenuLeftTitle>Left Menu</MenuLeftTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </MenuLeft>
    <MenuImage src={img} />
    <MenuRight>
      <MenuRightTitle>RightMenu</MenuRightTitle>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </MenuRight>
  </Container>
);

Menu.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Menu;
