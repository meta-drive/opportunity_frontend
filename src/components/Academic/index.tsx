import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { AcademicContainer } from './styles';
import api from '../../services/api';



const Academic: React.FC = () => {

  interface AcademicInterface {
    id: number,
    course: string,
    education_level: string,
    entry_date: string,
    graduation_date: string,
    institution: string,
  }

  interface LanguageInterface {
    id: number,
    language: string,
    level: string,
  }
  
  const { user, token } = useAuth();
  const [academics, setAcademics] = useState<AcademicInterface[]>([]);
  const [languages, setLanguages] = useState<LanguageInterface[]>([]);

  useEffect(() => {
    api.get(`/users/${user.id}/academics`, {headers: {Authorization: `Bearer ${token}`}})
    .then((academics) => {
      setAcademics(academics.data)
    })
    .catch(err => {})

    api.get(`/users/${user.id}/languages`, {headers: {Authorization: `Bearer ${token}`}})
    .then((langagues) => {
      setLanguages(langagues.data)
    })
    .catch(err => {})

  }, []);

  return (
    <>
      <AcademicContainer>
      <h3>Idiomas: </h3>
      {languages.map(language => (
        <div key={language.id}>
          <p><b>{language.language} - </b>{language.level}</p>
        </div>))}
      <hr/>
      </AcademicContainer>

      <AcademicContainer>
      <h3>Formação academica: </h3>
      {academics.map(academic => (
        <div key={academic.id}>
          <p><b>Curso: </b>{academic.course}</p>
          <p><b>Nível de Ensino: </b>{academic.education_level}</p>
          <p><b>Data de ingresso: </b>{academic.entry_date}</p>
          <p><b>Data Fim: </b>{academic.graduation_date}</p>
          <p><b>Curso: </b>{academic.course}</p>
        </div>))}
        </AcademicContainer>
    </>
  );
}

export default Academic;