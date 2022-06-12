import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <Paragraph>Copyright © 2021 az-edu-social-network</Paragraph>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin-top: 50px;
  margin-bottom: 20px;
  flex: 0 0 auto;
`;

const Paragraph = styled.p`
  font-size: 65%;
`;
