import React from 'react';

import styled from 'styled-components';

import LogoHeading from '../UI/Atoms/Heading/LogoHeading';
import DivMargin8TopBot from '../UI/Atoms/Div/DivMargin8TopBot';
import MainFlexboxSignup from '../UI/Atoms/Div/MainFlexboxSignup';
import FlexboxSignup from '../UI/Atoms/Div/FlexboxSignup';

import DashOrDash from '../UI/Molecules/DashOrDash';
import SignInForm from '../Components/SignInForm';

const SignInPage = () => (
  <>
    <MainFlexboxSignup>
      <FlexboxSignup>
        <LogoHeading />
        <SignInForm />
        <DashOrDash />
        <DivMargin8TopBot>
          <LoginFacebook href="#"> Log in with Facebook </LoginFacebook>
        </DivMargin8TopBot>
        <ResetAccountBnt href="#">
          Forgot password?
        </ResetAccountBnt>
      </FlexboxSignup>

      <FlexboxSignup>
        <AccountExistence>Don&apos;t have an account? <SignUpLink href="/sign-up">Sign up</SignUpLink>
        </AccountExistence>
      </FlexboxSignup>
    </MainFlexboxSignup>
  </>
);

export default SignInPage;

const LoginFacebook = styled.a`
    display: block;
    text-align: center;
    color: #385185;
    font-weight: 600;
    text-decoration: none;
    position: relative;
  &::before{
    content: "";
    background: url("/Resources/sprite/instagramSprite.png");
    background-size: 440px 411px;
    background-position: -348px -329px;
    height: 16px;
    width: 16px;
    position: absolute;
    left: 28px;
  }
`;

const AccountExistence = styled.p`    
    color: #262626;
    font-size: 14px;
    margin: 15px;
    text-align: center;  
`;

const SignUpLink = styled.a`
    color: #0095f6;
    text-decoration: none;
`;

const ResetAccountBnt = styled.a`
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: rgba(0,55,107, 1);
    font-size: 12px;
`;
