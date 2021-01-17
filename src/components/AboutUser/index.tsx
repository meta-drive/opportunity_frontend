import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, Title, Text } from './styles';

const AboutUser: React.FC = () => {
  const { user, token } = useAuth();
   return (
    <>
      <Container>
        <Title>Sobre {user.username}</Title>
        <Text>
          {user.description}
        </Text>
      </Container>
    </>
  );
}

export default AboutUser;