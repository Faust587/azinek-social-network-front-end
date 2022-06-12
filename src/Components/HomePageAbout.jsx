import React from 'react';
import styled from 'styled-components';

const HomePageAbout = () => (
  <AboutBlock>
    <Paragraph>
      We don&apos;t imagine our lives without Internet. We can find all necessary information
      there. We use popular services and sources every day. One of the most popular sources is
      social nets.
      <br />
      A social network is a very useful invention of the 21st century. Nowadays
      millions of people use social networks. It is an Internet site that gives us a chance to
      support various contacts, keep friendly relationships with classmates, acquaintances.
      <br />
      More functional social nets allow watching photos and video films, to listen
      to music and so on. There is a possibility to enter different interesting
      groups. There exist social nets connecting people according to a general
      interest, for example, computer games players are combined into a social net
    </Paragraph>
  </AboutBlock>
);

const AboutBlock = styled.section`
  width: 100%;
  margin-top: 1rem;
  flex: 1 0 auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  line-height: 1.2;
  font-size: 1.5rem;
  text-align: justify;
  padding: 0 15%;
`;

export default HomePageAbout;
