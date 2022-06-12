import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import WideButton from '../UI/Atoms/Button/WideButton';
import DivMargin8TopBot from '../UI/Atoms/Div/DivMargin8TopBot';
import DivMargin10TopBot from '../UI/Atoms/Div/DivMargin10TopBot';
import ErrorP from '../UI/Atoms/Paragraph/ErrorP';
import StyledTextField from '../UI/Molecules/StyledTextField';
import PasswordTextField from '../UI/Molecules/PasswordTextField';
import { signInAction } from '../Store/UserReducer';

import {
  validateEmail, validatePassword,
} from '../Utils/ValidationModule';

const { ROUTES: { LOGIN } } = require('../Constants/ServerRoutes');

export default function SignInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [requestError, setRequestError] = useState('');
  const [displayedErrors, setDisplayedErrors] = useState('');
  const user = {
    email,
    password,
  };
  const errors = {
    emailError: '',
    passwordError: '',
  };
  const validationCheck = () => {
    errors.emailError = validateEmail(email);
    errors.passwordError = validatePassword(password);
    setDisplayedErrors(Object.values(errors).filter((error) => error !== '').join('\n'));
    return Object.values(errors).every((error) => error === '');
  };
  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = validationCheck();
    if (!status) return false;
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + LOGIN, user);
      const { data, data: { accessToken, refreshToken } } = response;
      dispatch(signInAction({ user: data.user, accessToken, refreshToken }));
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

  return (
    <FlexForm onSubmit={handleSubmit}>
      <StyledTextField
        value={email}
        label="Email"
        onChange={
          (e) => setEmail(e.target.value)
        }
      />
      <PasswordTextField
        type="password"
        value={password}
        label="Password"
        onChange={
          (e) => setPassword(e.target.value)
        }
      />
      <DivMargin8TopBot>
        <WideButton
          type="submit"
          text="Sign in"
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
    width: 100%;          
`;
