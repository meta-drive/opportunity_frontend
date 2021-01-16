import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, Img, SocialLinks } from './styles';
import api from '../../services/api';



const UserPhoto: React.FC = () => {

  
  const { user, token } = useAuth();
  const defaultImage = '';

  useEffect(() => {
    // api.get(`/users/${user.id}/interests`, {headers: {Authorization: `Bearer ${token}`}})
    // .then((interests) => {
    //   setInterests(interests.data)
    // })
    // .catch(err => {})
    // console.log(user);
    console.log(user);
  }, []);

  return (
    <>
      <Container>
        {user.photo != null 
          ? <Img src={user.url} alt="Foto"/> 
          : <Img src={defaultImage} alt="Foto não encontrada"/> }
        
      </Container>
      <SocialLinks>
          {user.facebook != null ? <a target="_blank" href={user.facebook}>Facebook</a> : ''}
          {user.linkedin != null ? <a target="_blank" href={user.linkedin}>Linkedin</a> : ''}
          {user.instagram != null ? <a target="_blank" href={user.instagram}>Instagram</a> : ''}
      </SocialLinks>
    </>
  );
}

export default UserPhoto;