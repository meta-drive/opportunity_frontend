import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, Img } from './styles';
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
  }, []);

  return (
    <>
      <Container>
        {user.photo != null 
          ? <Img src={user.url} alt="Foto"/> 
          : <Img src={defaultImage} alt="Foto não encontrada"/> }
        
      </Container>
    </>
  );
}

export default UserPhoto;