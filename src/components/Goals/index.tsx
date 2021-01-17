import React, {useState, useEffect} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title } from './styles';

import api from '../../services/api';

interface EmblemInterface {
  id: number,
  title: string,
  image: string,
  score: number,
  url: string,
  on: boolean,
}



const Goals: React.FC = () => {
  const { user, token } = useAuth();

  return (
    <>
    <Container>
      <Title>Objetivos</Title>
      <ContentInfo>
      </ContentInfo>
    </Container>
    </>
  );
}

export default Goals;