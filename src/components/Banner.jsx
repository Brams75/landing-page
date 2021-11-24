/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { WhiteTextField, BrownButton } from "./customedComponents";
import restaurantImage from "../__images__/restaurant.jpg";

const Container = styled.div`
  min-height: 50vh;
  background: url(${restaurantImage});
  background-position: center;
  background-size: cover;
  filter: sepia(40%);
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const BannerLeft = styled.div`
  width: 70%;
  color: white;
  font-size: 3rem;
  margin-left: 25%;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
    font-size: 2rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const BannerForm = styled.div`
  background: #fd4f2d;
  min-height: 50vh;
  min-width: 20rem;
  max-width: 30%;
  margin-left: 37.5%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 50%;
    max-width: 100%;
    margin: 0 auto;
  }
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

const BannerDate = styled.div`
  background: white;
  min-width: 75%;
  margin-top: 0.2rem;
`;

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
          <WhiteTextField placeholder="YOUR NAME" />
          <WhiteTextField placeholder="YOUR EMAIL" />
          <WhiteTextField placeholder="PHONE NUMBER" />
          <BannerDate>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </BannerDate>
          <BrownButton variant="contained">REQUEST BOOKING</BrownButton>
        </BannerForm>
      </BannerRight>
    </Container>
  );
};
export default Banner;
