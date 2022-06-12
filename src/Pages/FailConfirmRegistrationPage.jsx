import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import WideButton from '../UI/Atoms/Button/WideButton';

const FailConfirmRegistrationPage = ({ match }) => {
  const { userName } = match.params;
  return (
    <StyledDivContent>
      <StyledDiv>
        <StyledImage src="/Resources/icons/close.png" alt="Close icon" />
        <h1>Sorry, { userName } </h1>
        <StyledP>
          Your account could not be activated. Contact your administrator for assistance.
        </StyledP>
        <FlexDiv>
          <Link to="/" style={{ textDecoration: 'none', width: '200px' }}>
            <WideButton text="Go to login" />
          </Link>
        </FlexDiv>
      </StyledDiv>
    </StyledDivContent>
  );
};

const StyledDivContent = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 100%;
  line-height: 60px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledImage = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

const StyledP = styled.p`
  width: 80%;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default FailConfirmRegistrationPage;
