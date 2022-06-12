import React from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Footer';

export default function ({ children }) {
  return (
    <FlexWrapper>
      <ChildrenWrapper>
        { children }
      </ChildrenWrapper>
      <FlexFooter />
    </FlexWrapper>
  );
}

const ChildrenWrapper = styled.div`
  flex: 0 0 auto;
  align-self: center;
`;

const FlexFooter = styled(Footer)`
  flex: 1 0 auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
