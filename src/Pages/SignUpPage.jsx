import React from 'react';

import styled from 'styled-components';

import LogoHeading from '../UI/Atoms/Heading/LogoHeading';
import WideButton from '../UI/Atoms/Button/WideButton';
import DivMargin8TopBot from '../UI/Atoms/Div/DivMargin8TopBot';
import LogoSpan from '../UI/Atoms/Logo/LogoSpan';
import MainFlexboxSignup from '../UI/Atoms/Div/MainFlexboxSignup';
import FlexboxSignup from '../UI/Atoms/Div/FlexboxSignup';
import DashOrDash from '../UI/Molecules/DashOrDash';
import SignUpForm from '../Components/SignUpForm';

const SignUpPage = () => (
  <>
    <MainFlexboxSignup>
      <FlexboxSignup>
        <LogoHeading />
        <H2SignUp>
          Sign up to see photos and videos from your friends.
        </H2SignUp>
        <DivMargin8TopBot>
          <WideButton text="Log in with Facebook" span={<LogoSpan />} />
        </DivMargin8TopBot>
        <DashOrDash />
        <SignUpForm />
      </FlexboxSignup>

      <FlexboxSignup>
        <Option>Have an account? <LogInLink href="/sign-in">Log in</LogInLink>
        </Option>
      </FlexboxSignup>
    </MainFlexboxSignup>
  </>
);

export default SignUpPage;

const H2SignUp = styled.h2`
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 10px;
    text-align: center;
`;

const Option = styled.p`    
    color: #262626;
    font-size: 14px;
    margin: 15px;
    text-align: center;  
`;

const LogInLink = styled.a`
    color: #0095f6;
    text-decoration: none;
`;
