import React, {useState} from 'react';

import { MainContainer, PersonalInfoContainer, EmblemsContainer, GoalsContainer, LeftPersonalContainer, 
         RightPersonalContainer, ProfileContainer } from './styles';
import PersonalInfo from '../../components/PersonalInfo';
import UserPhoto from '../../components/UserPhoto';
import AboutUser from '../../components/AboutUser';
import Emblems from '../../components/Emblems';

const Home: React.FC = () => {

  return (
    <MainContainer>
      <ProfileContainer>
        <PersonalInfoContainer>
          <LeftPersonalContainer>
            <UserPhoto />
            <AboutUser />
          </LeftPersonalContainer>
          <RightPersonalContainer>
            <PersonalInfo />
          </RightPersonalContainer>
        </PersonalInfoContainer>
        <Emblems />
        <GoalsContainer>baixo</GoalsContainer>
      </ProfileContainer>
    </MainContainer>
  );
}

export default Home;
