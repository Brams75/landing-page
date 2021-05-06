import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Container = styled.div`
  background: #460e0d;
  background-size: cover;
  height: 10rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TableTitle = styled.h2``;
const TableText = styled.p`
  text-align: center;
`;

const OrangeButton = withStyles({
  root: {
    backgroundColor: '#DB6B4A',
    margin: '1rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#DB6B4A',
    },
  },
})(Button);

const Table = () => (
  <Container>
    <TableTitle>WE OFFER THE BEST MEALS AT THE BEST VALUE</TableTitle>
    <TableText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </TableText>
    <OrangeButton>BOOK A TABLE</OrangeButton>
  </Container>
);
export default Table;
