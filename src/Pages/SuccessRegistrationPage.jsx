import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WideButton from '../UI/Atoms/Button/WideButton';

const SuccessRegistrationPage = ({ match: { params: { username, email } } }) => (
  <StyledDiv>
    <StyledImage src="/Resources/icons/check.png" alt="" />
    <h1>Thank you, {username}, for your registration!</h1>
    <br />
    <h2>You will soon receive confirmation email to {email}</h2>
    <br />
    <Link to="/" style={{ textDecoration: 'none' }}>
      <WideButton text="Go to home page" />
    </Link>
  </StyledDiv>
);

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 15%;
  align-items: center;
`;

const StyledImage = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

export default SuccessRegistrationPage;
