import React from 'react';
import styled from 'styled-components';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';

const Container = styled.div`
  height: 10vh;
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

const HeaderContactNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 17rem;
`;

const HeaderContactNumberOrange = styled.div`
  color: #ff5c39;
`;

const HeaderTitle = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitleDescription = styled.div``;

const HeaderTitleDescriptionOrange = styled.span`
  color: #ff5c39;
`;
const HeaderTitleDescriptionBrown = styled.span`
  margin-left: 1rem;
  color: #460e0d;
`;

const HeaderTitleInfo = styled.p`
  color: #460e0d;
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
