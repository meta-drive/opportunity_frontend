import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, Title, Text } from './styles';
import api from '../../services/api';



const AboutUser: React.FC = () => {

  
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
        <Title>Sobre {user.username}</Title>
        <Text>
          {user.description}
        </Text>
      </Container>
    </>
  );
}

export default AboutUser;