import React from 'react';
import styled from 'styled-components';

import HomePageSlider from '../Components/HomePageSlider';
import HomePageAbout from '../Components/HomePageAbout';
import SignInPage from './SignInPage';

const HomePage = () => (
  <HomePageWrapper>
    <Main>
      <Content>
        <HomePageSlider />
        <SignInPage />
      </Content>
    </Main>
    <HomePageAbout />
  </HomePageWrapper>
);

const Content = styled.section`
  max-width: 1000px;
  margin: 1rem auto 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomePageWrapper = styled.div`
  min-width: 320px;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 2 0 auto;
`;

export default HomePage;
