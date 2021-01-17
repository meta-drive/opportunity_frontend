import React, {useState, useEffect} from 'react';

import { useAuth } from  '../../context/AuthContext';

import { Container, ContentInfo, Title } from './styles';

import api from '../../services/api';

interface InterestInterface {
  id: number,
  occupation: String,
  max_salary: number,
  min_salary: number,
}

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

interface ExperienceInterface {
  id: number,
  activities: string,
  company_name: string,
  entry_date: string,
  final_date?: string,
  modality: string,
  occupation: string,
}

const PersonalInfo: React.FC = () => {
  const { user, token } = useAuth();
  const [interests, setInterests] = useState<InterestInterface[]>([]);
  const [academics, setAcademics] = useState<AcademicInterface[]>([]);
  const [languages, setLanguages] = useState<LanguageInterface[]>([]);
  const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);

  useEffect(() => {
    api.get(`/users/${user.id}/interests`, {headers: {Authorization: `Bearer ${token}`}})
    .then((interests) => {
      setInterests(interests.data)
    })
    .catch(err => {})

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

    api.get(`/users/${user.id}/experiences`, {headers: {Authorization: `Bearer ${token}`}})
    .then((expriences) => {
      setExperiences(expriences.data)
    })
    .catch(err => {})

  }, []);

  return (
    <>
    <Container>
      <Title>
        Informações Pessoal
      </Title>
      <ContentInfo>
        <p><b>Nome:</b> {user.username}</p>
        <p><b>E-mail:</b> {user.email}</p>
        <p><b>Sexo:</b> {user.genre}</p>
        <p><b>Estado Civil:</b> {user.marital_status}</p>
        <p><b>Telefone:</b> {user.phone}</p>
      </ContentInfo>
    </Container>
    
    <Container>
      <Title>Resumo Profissional</Title>
      <ContentInfo>
        <p>{user.professional_resume}</p>
      </ContentInfo>
    </Container>
    
    <Container>
      <Title>Objetivo Profissional</Title>
      <ContentInfo>
        {interests.map(interest => (
        <div key={interest.id}>
          <p><b>{interest.occupation}</b></p>
          <p>Salário: {interest.max_salary} - {interest.min_salary}</p>
        </div>))}
      </ContentInfo>
    </Container>


    <Container>
      <Title>Idiomas:</Title>
      <ContentInfo>
        {languages.map(language => (
        <div key={language.id}>
          <p><b>{language.language} - </b>{language.level}</p>
        </div>))}
      </ContentInfo>
    </Container>

    <Container>
      <Title>Formação academica:</Title>
      <ContentInfo>
      {academics.map(academic => (
        <div key={academic.id}>
          <p><b>Curso: </b>{academic.course}</p>
          <p><b>Nível de Ensino: </b>{academic.education_level}</p>
          <p><b>Data de ingresso: </b>{academic.entry_date}</p>
          <p><b>Data Fim: </b>{academic.graduation_date}</p>
          <p><b>Curso: </b>{academic.course}</p>
        </div>))}
      </ContentInfo>
    </Container>

    <Container>
      <Title>Experiência Profissional:</Title>
      <ContentInfo>
      {experiences.map(experience => (
        <div key={experience.id}>
          <p><b>Empresa: </b>{experience.company_name}</p>
          <p><b>Cargo: </b>{experience.occupation}</p>
          <p><b>Data de Início: </b>{experience.entry_date}</p>
          <p><b>Data Fim: </b>{experience.final_date}</p>
          <p><b>Modalidade: </b>{experience.modality}</p>
          <p><b>Atividades: </b>{experience.activities}</p>
        </div>))}
      </ContentInfo>
    </Container>
    
    </>
  );
}

export default PersonalInfo;