import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Container = styled.div`
  background: #460e0d;
  background-size: cover;
  min-height: 15rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;
const TableTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ orange }) => (orange ? '#FD4F2D' : 'white')};
  margin: 0.5rem;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
const TableText = styled.p`
  text-align: center;
  width: 50%;
`;

const OrangeButton = withStyles({
  root: {
    backgroundColor: '#DB6B4A',
    margin: '1rem',
    padding: '0.8rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#DB6B4A',
    },
  },
})(Button);

const Table = ({ orange }) => (
  <Container>
    <TableTitle orange={orange}>
      WE OFFER THE BEST MEALS AT THE BEST VALUE
    </TableTitle>
    <TableText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </TableText>
    <OrangeButton>BOOK A TABLE</OrangeButton>
  </Container>
);

Table.defaultProps = { orange: false };

Table.propTypes = {
  orange: PropTypes.bool.isRequired,
};

export default Table;
