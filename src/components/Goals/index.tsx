import React, {useState, useEffect} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title, Balloon } from './styles';

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
        <Balloon alignSelf='flex-start'>teste 1</Balloon>
        <Balloon alignSelf='flex-end'>teste 2</Balloon>
        <Balloon alignSelf='flex-start'>teste 3</Balloon>
        <Balloon alignSelf='flex-end'>teste 4</Balloon>
        <Balloon alignSelf='center'>teste 5</Balloon>
      </ContentInfo>
    </Container>
    </>
  );
}

export default Goals;