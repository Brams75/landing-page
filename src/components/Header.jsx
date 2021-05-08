import React from 'react';
import styled from 'styled-components';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';

const Container = styled.div`
  height: auto;
  color: white;
`;

const HeaderContact = styled.div`
  background: #460e0d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5vh;
`;

const HeaderContactAdress = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContactNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 17rem;
`;

export const HeaderContactNumberOrange = styled.div`
  color: #ff5c39;
`;

const HeaderTitle = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const HeaderTitleDescription = styled.div``;

const HeaderTitleDescriptionOrange = styled.span`
  color: #ff5c39;
  font-size: 2rem;
  font-weight: bold;
`;
const HeaderTitleDescriptionBrown = styled.span`
  margin-left: 1rem;
  color: #460e0d;
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderTitleInfo = styled.p`
  color: #460e0d;
  font-size: 1.3rem;
  font-weight: bold;
  font-style: italic;
`;

const Header = () => (
  <Container data-testid="header">
    <HeaderContact>
      <HeaderContactAdress>
        <RoomIcon data-testid="roomIcon" />
        Via Gustavo Modena 26, 20129 Milan, Italy
      </HeaderContactAdress>
      <HeaderContactNumber>
        <CallIcon data-testid="callIcon" />
        Call Us Today
        <HeaderContactNumberOrange>+1 800 567 1234</HeaderContactNumberOrange>
      </HeaderContactNumber>
    </HeaderContact>
    <HeaderTitle>
      <HeaderTitleDescription>
        <HeaderTitleDescriptionOrange>Italian</HeaderTitleDescriptionOrange>
        <HeaderTitleDescriptionBrown>Restaurant</HeaderTitleDescriptionBrown>
      </HeaderTitleDescription>
      <HeaderTitleInfo>an elegant, fine dining experience</HeaderTitleInfo>
    </HeaderTitle>
  </Container>
);
export default Header;
