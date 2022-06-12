import React from 'react';
import styled from 'styled-components';
import WideButton from '../UI/Atoms/Button/WideButton';

const Error404Page = () => (
  <ErrorStyle>
    <ErrorText> 404 Error. Page not found.</ErrorText>
    <LimitButton>
      <WideButton text="Go to home" onClick={() => { window.location.href = '/'; }} />
    </LimitButton>
  </ErrorStyle>
);

export default Error404Page;

const LimitButton = styled.div`
  width: 150px;
  margin: 1rem;
`;

const ErrorStyle = styled.p`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ErrorText = styled.div`
  line-height: 35px;
  color: #181717;
  margin: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 2rem;
`;
