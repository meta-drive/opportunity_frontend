import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { InterestContainer } from './styles';
import api from '../../services/api';



const Interest: React.FC = () => {

  interface InterestInterface {
    id: number,
    occupation: String,
    max_salary: number,
    min_salary: number,
  }
  
  const { user, token } = useAuth();
  const [interests, setInterests] = useState<InterestInterface[]>([]);

  useEffect(() => {
    api.get(`/users/${user.id}/interests`, {headers: {Authorization: `Bearer ${token}`}})
    .then((interests) => {
      setInterests(interests.data)
    })
    .catch(err => {})

  }, []);

  return (
    <> 
      <InterestContainer>
      <h3>Resumo Profissional </h3>
        <div>
          <p>{user.professional_resume}</p>
        </div>
        <br/>      
      <h3>Objetivos Profissional </h3>
      {interests.map(interest => (
        <div key={interest.id}>
          <p><b>{interest.occupation}</b></p>
          <p>Salário: {interest.max_salary} - {interest.min_salary}</p>
          <hr/>
        </div>))}
      </InterestContainer>
    </>
  );
}

export default Interest;