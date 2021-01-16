import React from 'react';

import { MainContainer, PersonalInfoContainer, EmblemsContainer, GoalsContainer, LeftPersonalContainer, 
         RightPersonalContainer } from './styles';
import PersonalInfo from '../../components/PersonalInfo';
import ExtraInfo from '../../components/ExtraInfo';
import UserPhoto from '../../components/UserPhoto';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <PersonalInfoContainer>
        <LeftPersonalContainer>
          <UserPhoto />
          <div>teste2</div>
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
