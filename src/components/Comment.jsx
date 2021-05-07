import React from 'react';
import styled from 'styled-components';
import commentImage from '../__images__/commentImage.jpg';

const Container = styled.div`
  background: #fd4f2d;
  height: 30vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentPicture = styled.img`
  object-fit: cover;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;

const CommentParagraph = styled.div``;

const CommentText = styled.p``;

const CommentName = styled.p``;

const Comment = () => (
  <Container>
    <CommentContainer>
      <CommentPicture src={commentImage} />
      <CommentParagraph>
        <CommentText>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </CommentText>
        <CommentName>-JHON SMITH</CommentName>
      </CommentParagraph>
    </CommentContainer>
  </Container>
);
export default Comment;
