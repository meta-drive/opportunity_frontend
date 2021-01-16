import React from 'react';

import { MainContainer, PersonalInfoContainer, EmblemsContainer, GoalsContainer, LeftPersonalContainer, 
         RightPersonalContainer } from './styles';
import PersonalInfo from '../../components/PersonalInfo';
import ComplementaryInfo from '../../components/ComplementaryInfo';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <PersonalInfoContainer>
        <LeftPersonalContainer>
          <div>borda temporaria</div>
          <div>teste2</div>
        </LeftPersonalContainer>
        <RightPersonalContainer>
          <PersonalInfo />
          <ComplementaryInfo />
        </RightPersonalContainer>
      </PersonalInfoContainer>
      <EmblemsContainer>meio</EmblemsContainer>
      <GoalsContainer>baixo</GoalsContainer>
    </MainContainer>
  );
}

export default Home;
