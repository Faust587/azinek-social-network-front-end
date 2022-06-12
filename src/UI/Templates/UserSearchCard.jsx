import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserSearchCard = ({
  userName,
  fullName,
  userImage,
}) => (
  <StyledLink to={`/profile/${userName}`}>
    <FlexDiv>
      <FlexDiv>
        <StyledImage alt="user image" src={userImage} />
      </FlexDiv>
      <FlexColumnDiv>
        <StyledP>{userName}</StyledP>
        <StyledPFullName>{fullName}</StyledPFullName>
      </FlexColumnDiv>
    </FlexDiv>
  </StyledLink>
);

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  font-weight: bold;
  text-decoration: none;
`;

const StyledPFullName = styled.p`
  font-weight: bold;
  color: gray;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const StyledImage = styled.img`
  border-radius: 50px;
  max-block-size: 50px;
`;

export default UserSearchCard;
