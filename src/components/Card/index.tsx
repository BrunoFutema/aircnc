import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Card: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={logo} alt="AirCNC" />

      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
