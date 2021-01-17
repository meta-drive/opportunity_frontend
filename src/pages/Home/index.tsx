import React, {useState} from 'react';

import { MainContainer, PersonalInfoContainer, EmblemsContainer, GoalsContainer, LeftPersonalContainer, 
         RightPersonalContainer } from './styles';
import PersonalInfo from '../../components/PersonalInfo';
import ExtraInfo from '../../components/ExtraInfo';
import UserPhoto from '../../components/UserPhoto';
import AboutUser from '../../components/AboutUser';

const Home: React.FC = () => {

  return (
    <MainContainer>
      <PersonalInfoContainer>
        <LeftPersonalContainer>
          <UserPhoto />
          <AboutUser />
        </LeftPersonalContainer>
        <RightPersonalContainer>
          <PersonalInfo />
          <ExtraInfo />
        </RightPersonalContainer>
      </PersonalInfoContainer>
      <EmblemsContainer>meio</EmblemsContainer>
      <GoalsContainer>baixo</GoalsContainer>
    </MainContainer>
  );
}

export default Home;
