import React from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title } from './styles';

const PersonalInfo: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Title>
        Personal Info
      </Title>
      <ContentInfo>
        <p><b>Nome:</b> {user.username}</p>
        <p><b>E-mail:</b> {user.email}</p>
        <p><b>Sexo:</b> {user.genre}</p>
        <p><b>Estado Civil:</b> {user.marital_status}</p>
        <p><b>Telefone:</b> {user.phone}</p>
        <p><b>Resumo Profissional:</b> {user.professional_resume}</p>
      </ContentInfo>
    </Container>
  );
}

export default PersonalInfo;