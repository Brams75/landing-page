import React, { useState } from 'react';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import restaurantImage from '../__images__/restaurant.jpg';

const Container = styled.div`
  min-height: 50vh;
  background: url(${restaurantImage});
  background-position: center;
  background-size: cover;
  filter: sepia(40%);
  display: flex;
  align-items: center;
`;

const BannerLeft = styled.div`
  width: 70%;
  color: white;
  font-size: 3rem;
  margin-left: 25%;
`;
const BannerLeftTextTop = styled.p``;
const BannerLeftTextMiddle = styled.p`
  font-weight: bold;
  font-size: 4rem;
`;
const BannerLeftTextBottom = styled.p``;

const BannerRight = styled.div`
  min-width: 50%;
  margin-left: -20%;
`;

const BannerForm = styled.div`
  background: #fd4f2d;
  min-height: 50vh;
  width: 30%;
  margin-left: 37.5%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerFormTitle = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

const BannerFormInfo = styled.p`
  margin: 0.5rem;
  text-align: center;
`;

const WhiteTextField = withStyles({
  root: {
    backgroundColor: '#fff',
    margin: '0.2rem',
    width: '75%',
  },
})(TextField);

const BrownButton = withStyles({
  root: {
    backgroundColor: '#460e0d',
    margin: '1rem',
    padding: '0.8rem',
    color: 'white',
    '&:hover': {
      backgroundColor: '#460e0d',
    },
  },
})(Button);

const actualDate = new Date();
const Banner = () => {
  const [selectedDate, handleDateChange] = useState(actualDate);

  return (
    <Container data-testid="banner">
      <BannerLeft>
        <BannerLeftTextTop>Welcome to</BannerLeftTextTop>
        <BannerLeftTextMiddle>Italian Restaurant</BannerLeftTextMiddle>
        <BannerLeftTextBottom>Make yourself at home</BannerLeftTextBottom>
      </BannerLeft>
      <BannerRight>
        <BannerForm>
          <BannerFormTitle>BOOK A TABLE</BannerFormTitle>
          <BannerFormInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          </BannerFormInfo>
          <WhiteTextField
            id="standard-basic"
            placeholder="YOUR NAME"
            color="secondary"
          />
          <WhiteTextField
            id="standard-basic"
            placeholder="YOUR EMAIL"
            color="secondary"
          />
          <WhiteTextField
            id="standard-basic"
            placeholder="PHONE NUMBER"
            color="primary"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
          <BrownButton variant="contained">REQUEST BOOKING</BrownButton>
        </BannerForm>
      </BannerRight>
    </Container>
  );
};
export default Banner;
