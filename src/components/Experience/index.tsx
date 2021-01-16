import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { ExperienceContainer } from './styles';
import api from '../../services/api';



const Experience: React.FC = () => {

  interface ExperienceInterface {
    id: number,
    activities: string,
    company_name: string,
    entry_date: string,
    final_date?: string,
    modality: string,
    occupation: string,
  }

  const { user, token } = useAuth();
  const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);

  useEffect(() => {
    api.get(`/users/${user.id}/experiences`, {headers: {Authorization: `Bearer ${token}`}})
    .then((expriences) => {
      setExperiences(expriences.data)
      console.log(expriences.data);
    })
    .catch(err => {})

  }, []);

  return (
    <ExperienceContainer>
      <div>
      <h3>Experiência Profissional: </h3>
      {experiences.map(experience => (
        <div key={experience.id}>
          <p><b>Empresa: </b>{experience.company_name}</p>
          <p><b>Cargo: </b>{experience.occupation}</p>
          <p><b>Data de Início: </b>{experience.entry_date}</p>
          <p><b>Data Fim: </b>{experience.final_date}</p>
          <p><b>Modalidade: </b>{experience.modality}</p>
          <p><b>Atividades: </b>{experience.activities}</p>
        </div>))}
      </div>

    </ExperienceContainer>
  );
}

export default Experience;