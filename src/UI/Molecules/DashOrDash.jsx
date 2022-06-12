import React from 'react';
import styled from 'styled-components';

export default function DashOrDash() {
  return (
    <FlexContainer>
      <Dash />
      <OrDiv>
        OR
      </OrDiv>
      <Dash />
    </FlexContainer>
  );
}

const Dash = styled.div`
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;    
    height: 1px;
    position: relative;
    top: 0.45em;
    background-color: #dbdbdb;
`;
const FlexContainer = styled.div`
    width:100%;
    display:flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 10px 40px 18px;
`;

const OrDiv = styled.div`
    color: #8e8e8e;    
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
`;
