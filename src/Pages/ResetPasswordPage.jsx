import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PasswordTextField from '../UI/Molecules/PasswordTextField';
import WideButton from '../UI/Atoms/Button/WideButton';
import IGLogoHeading from '../UI/Atoms/Heading/LogoHeading';
import DivMargin10TopBot from '../UI/Atoms/Div/DivMargin10TopBot';
import DivMargin8TopBot from '../UI/Atoms/Div/DivMargin8TopBot';

import { validatePassword } from '../Utils/ValidationModule';
import ErrorP from '../UI/Atoms/Paragraph/ErrorP';

const PAGE_STATES = {
  UPDATE_NOT_REQUESTED: 'UPDATE_NOT_REQUESTED',
  FAILED_UPDATE: 'NOT_UPDATED',
  SUCCESSFULLY_UPDATED: 'SUCCESSFULLY_UPDATED',
};

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(PAGE_STATES.UPDATE_NOT_REQUESTED);
  const [displayedErrors, setDisplayedErrors] = useState('');
  const errors = {
    passwordError: '',
  };
  const validationCheck = () => {
    errors.passwordError = validatePassword(password, repeatPassword);
    setDisplayedErrors(Object.values(errors).filter((error) => error !== '').join('\n'));
    return Object.values(errors).every((error) => error === '');
  };
  // eslint-disable-next-line consistent-return
  const sendUpdatePasswordRequest = () => {
    const status = validationCheck();
    if (!status) return false;
    // TODO: Add request to API
    setIsPasswordUpdated(PAGE_STATES.SUCCESSFULLY_UPDATED);
  };
  if (isPasswordUpdated === PAGE_STATES.SUCCESSFULLY_UPDATED) {
    return (
      <FlexDiv>
        <StyledImage src="/Resources/icons/check.png" alt="check" />
        <h1>Reset password request has been successfully sent</h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <WideButton text="Go to home page" />
        </Link>
      </FlexDiv>
    );
  }
  return (
    <FlexDiv>
      <BorderedDiv>
        <IGLogoHeading />
        <PasswordTextField
          type="password"
          label="Password"
          value={password}
          onChange={
            (e) => setPassword(e.target.value)
          }
        />
        <PasswordTextField
          type="password"
          label="Repeat password"
          value={repeatPassword}
          onChange={
            (e) => setRepeatPassword(e.target.value)
          }
        />
        <DivMargin8TopBot>
          <WideButton
            type="submit"
            text="Reset password"
            onClick={sendUpdatePasswordRequest}
          />
        </DivMargin8TopBot>
        <DivMargin10TopBot>
          <ErrorP>
            {displayedErrors}
          </ErrorP>
        </DivMargin10TopBot>
      </BorderedDiv>
    </FlexDiv>
  );
};

const FlexDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 30vh;

  & h1 {
    text-align: center;
    line-height: normal;
    
    @media only screen and (max-width: 350px) {
      font-size: 14px;
    }
  }
`;

const BorderedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  
  @media only screen and (min-width: 450px) {
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
  }
  
  @media only screen and (min-width: 300px) {
    padding: 10px 40px;
  }
`;

const StyledImage = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

export default ResetPasswordPage;
