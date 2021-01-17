import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, Img, SocialLinks, Level, ContainerPhoto} from './styles';

import facebookIcon from '../../assets/icons/FacebookCCR.svg';
import instagramIcon from '../../assets/icons/InstagramCCR.svg';
import LinkedinIcon from '../../assets/icons/LinkedinCCR.svg';

import level1 from '../../assets/icons/1CCR.svg';
import level2 from '../../assets/icons/2CCR.svg';
import level3 from '../../assets/icons/3CCR.svg';
import level4 from '../../assets/icons/4CCR.svg';
import level5 from '../../assets/icons/5CCR.svg';

const UserPhoto: React.FC = () => {

  const { user, token } = useAuth();
  const defaultImage = '';

  return (
    <>
      <Container>
        <ContainerPhoto>
        {/* <Level> */}
          <img className="level" src={level1}/>
        {/* </Level> */}
        {user.photo != null 
          ? <Img src={user.url} alt="Foto"/> 
          : <Img src={defaultImage} alt="Foto não encontrada"/> }
        </ContainerPhoto>
        <SocialLinks>
          {user.facebook && <a target="_blank" href={user.facebook}><img src={facebookIcon} /></a>}
          {user.linkedin && <a target="_blank" href={user.linkedin}><img src={instagramIcon} /></a>}
          {user.instagram && <a target="_blank" href={user.instagram}><img src={instagramIcon} /></a>}
        </SocialLinks>
      </Container>

    </>
  );
}

export default UserPhoto;