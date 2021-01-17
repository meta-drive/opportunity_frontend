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

  function isGoalAchieved () {
    return user.is_interest_filled && 
      user.is_profile_completed &&
      user.is_general_challenges_completed &&
      user.is_specific_challenges_completed;
  }

  useEffect(() => {
    console.log(user);
  });
  return (
    <>
    <Container>
      <Title>Objetivos</Title>
      <ContentInfo>
        <Balloon isCompleted={user.is_interest_filled} alignSelf='flex-start'>Definir Objetivo</Balloon>
        <Balloon isCompleted={user.is_profile_completed} alignSelf='flex-end'>Atualizar Dados</Balloon>
        <Balloon isCompleted={user.is_general_challenges_completed} alignSelf='flex-start'>Desafios Gerais</Balloon>
        <Balloon isCompleted={user.is_specific_challenges_completed} alignSelf='flex-end'>Desafios Específicos</Balloon>
        <Balloon isCompleted={isGoalAchieved()} alignSelf='center'>Completo</Balloon>
      </ContentInfo>
    </Container>
    </>
  );
}

export default Goals;