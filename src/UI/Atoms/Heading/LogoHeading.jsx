import React from 'react';
import styled from 'styled-components';

export default function IGLogoHeading() {
  return (
    <LogoHeading>
      Instagram
    </LogoHeading>
  );
}

const LogoHeading = styled.h1`
    margin: 22px auto 12px;
    
    background-size: 440px 411px;
    background-position: 0 -129px;
    background-image: url("/Resources/sprite/instagramSprite.png");    
    background-repeat: no-repeat;
    height: 51px;
    width: 175px;
    
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
    
    margin-inline-start: 0;
    margin-inline-end: 0;
`;
