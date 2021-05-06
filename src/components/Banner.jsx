import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import styled from 'styled-components';
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
  width: 70vw;
  color: white;
  font-size: 3rem;
`;
const BannerLeftTextTop = styled.p``;
const BannerLeftTextMiddle = styled.p``;
const BannerLeftTextBottom = styled.p``;

const BannerRight = styled.div`
  width: 30vw;
`;

const BannerForm = styled.div`
  background: #fd4f2d;
  min-height: 50vh;
  min-width: 20rem;
  max-width: 20rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerFormTitle = styled.h2`
  text-align: center;
  margin-top: 2rem;
`;

const BannerFormInfo = styled.p`
  margin: 0.5rem;
  text-align: center;
`;

const BannerFormInput = styled.input`
  border: none;
  width: 75%;
  margin: 0.3rem 0.7rem;
  height: 2rem;
`;

const BannerFormButton = styled.button`
  background: #460e0d;
  padding: 1rem;
  color: white;
  margin: 1rem;
`;

const actualDate = new Date();
const Banner = () => {
  const [selectedDate, handleDateChange] = useState(actualDate);
  return (
    <Container>
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
          <BannerFormInput />
          <BannerFormInput />
          <BannerFormInput />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
          <BannerFormButton>REQUEST BOOKING</BannerFormButton>
        </BannerForm>
      </BannerRight>
    </Container>
  );
};
export default Banner;
