import React, { useState } from 'react';

import styled from 'styled-components';

import axios from 'axios';

import { Redirect } from 'react-router-dom';
import WideButton from '../UI/Atoms/Button/WideButton';
import DivMargin8TopBot from '../UI/Atoms/Div/DivMargin8TopBot';
import DivMargin10TopBot from '../UI/Atoms/Div/DivMargin10TopBot';
import ErrorP from '../UI/Atoms/Paragraph/ErrorP';
import StyledTextField from '../UI/Molecules/StyledTextField';
import PasswordTextField from '../UI/Molecules/PasswordTextField';

import {
  validateEmail, validateFullName, validateUserName, validatePassword,
} from '../Utils/ValidationModule';

const { ROUTES: { REGISTER } } = require('../Constants/ServerRoutes');
const { REQUEST_RESPONSES: { SUCCESS } } = require('../Constants/Messages');

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCopy, setPasswordCopy] = useState('');

  const [requestResponse, setRequestResponse] = useState('');
  const [requestError, setRequestError] = useState('');
  const [displayedErrors, setDisplayedErrors] = useState('');
  const newUser = {
    email,
    fullName,
    userName,
    password,
    passwordCopy,
  };
  const errors = {
    emailError: '',
    fullNameError: '',
    userNameError: '',
    passwordError: '',
  };
  const validationCheck = () => {
    errors.emailError = validateEmail(email);
    errors.fullNameError = validateFullName(fullName);
    errors.userNameError = validateUserName(userName);
    errors.passwordError = validatePassword(password, passwordCopy);
    setDisplayedErrors(Object.values(errors).filter((error) => error !== '').join('\n'));
    return Object.values(errors).every((error) => error === '');
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = validationCheck();
    if (!status) return false;
    try {
      const registerRequest = await axios.post(process.env.REACT_APP_API_URL + REGISTER, newUser);
      if (registerRequest.data.status === SUCCESS) {
        setRequestResponse(SUCCESS);
        setRequestError('');
      }
    } catch (err) {
      if (err.response) {
        setRequestError(err.response.data.errors.join('\n'));
      } else if (err.request) {
        setRequestError('No response from server');
      } else {
        setRequestError('Unknown Error');
      }
    }
  };

  if (requestResponse === SUCCESS) {
    return <Redirect to={`/success/${userName}/${email}`} />;
  }
  return (
    <FlexForm
      onSubmit={handleSubmit}
    >
      <StyledTextField
        label="Email"
        name="email"
        value={email}
        onChange={
          (e) => setEmail(e.target.value)
        }
      />
      <StyledTextField
        label="Full name"
        name="fullName"
        value={fullName}
        onChange={
          (e) => setFullName(e.target.value)
        }
      />
      <StyledTextField
        label="Username"
        name="userName"
        value={userName}
        onChange={
          (e) => setUserName(e.target.value)
        }
      />
      <PasswordTextField
        type="password"
        label="Password"
        name="password"
        value={password}
        onChange={
          (e) => setPassword(e.target.value)
        }
      />
      <PasswordTextField
        type="password"
        label="Repeat password"
        name="passwordCopy"
        value={passwordCopy}
        onChange={
          (e) => setPasswordCopy(e.target.value)
        }
      />
      <DivMargin8TopBot>
        <WideButton
          type="Submit"
          text="Sign up"
        />
      </DivMargin8TopBot>
      <DivMargin10TopBot>
        <ErrorP>
          {requestError}
        </ErrorP>
        <ErrorP>
          {displayedErrors}
        </ErrorP>
      </DivMargin10TopBot>
    </FlexForm>
  );
}

const FlexForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    width: 100%;
`;
