import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FoodImage = styled.img`
  border-radius: 100%;
  height: 15rem;
  width: 15rem;
  object-fit: cover;
  border: 0.5rem solid #efe9eb;
`;
const FoodName = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const FoodDescription = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const Food = ({ name, img }) => (
  <Container>
    <FoodImage src={img} />
    <FoodName>{name}</FoodName>
    <FoodDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </FoodDescription>
  </Container>
);

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Food;
