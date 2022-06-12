import React from 'react';

import {
  AppBar, useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconMenu from '../UI/Molecules/IconMenu';

const Header = () => {
  const matches1000 = useMediaQuery('(min-width:1000px)');

  return (
    <AppBar
      position="fixed"
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #dbdbdb',
      }}
    >
      <HeaderContent>
        <HeaderBlock style={{ width: matches1000 === true ? '33%' : '20%' }}>
          <HeaderLogo />
        </HeaderBlock>
        <HeaderBlock style={{ display: matches1000 === true ? 'flex' : 'none' }}>
          <Link to="/search">
            <Button
              style={{
                color: 'black',
                paddingLeft: '50px',
                paddingRight: '50px',
              }}
            >Search
            </Button>
          </Link>
        </HeaderBlock>
        <HeaderBlock style={{ width: matches1000 === true ? '33%' : '70%' }}>
          <IconMenu />
        </HeaderBlock>
      </HeaderContent>
    </AppBar>
  );
};

const HeaderContent = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const HeaderBlock = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 50%;
    justify-content: space-around;
  }
`;

const HeaderLogo = styled.div`
  background-size: cover;
  background-image: url("/Resources/icons/logoprofile.png");
  background-repeat: no-repeat;
  height: 30px;
  width: 100px;
  @media (max-width: 600px) {
    height: 20px;
    width: 80px;
  }
`;

export default Header;
