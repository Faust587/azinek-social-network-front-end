import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import WideButton from '../UI/Atoms/Button/WideButton';
import Max100x100Img from '../UI/Atoms/Img/Max100x100Img';

const ConfirmRegistrationPage = ({ match }) => {
  const { userName } = match.params;
  return (
    <StyledDiv>
      <Max100x100Img src="/Resources/icons/check.png" alt="Check icon" />
      <h1>Congratulations, {userName}! </h1>
      <br /><br />
      <h2>You have successfully completed registration and become
        a member of the Social Network community
      </h2>
      <br />
      <FlexDiv>
        <Link to="/" style={{ textDecoration: 'none', width: '200px' }}>
          <WideButton text="Go to login" />
        </Link>
      </FlexDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  margin-top: 10%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1%;
`;

export default ConfirmRegistrationPage;
