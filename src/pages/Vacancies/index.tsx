import React, {useState, useEffect} from 'react';

import { MainContainer, ContainerCards, ContainerVacancies, Title } from './styles';
import VacancyCard from '../../components/Vacancy/index';
import api from '../../services/api';

import image from '../../images/Background-com-roboCCR.svg';

interface Company {
  id: number,
  company_name: string,
  occupation_area: string,
}

interface Branch {
  id: number,
  email: string,
  is_matrix: boolean,
  phone: string,
  campany: Company,
}

interface Occupation {
  id: number,
  name: string,
  occupation_area: string,
}

interface VacancyInterface {
  id: number,
  description: string,
  is_for_pcd: boolean,
  salary: number,
  branch: Branch,
  occupation: Occupation,
}

const Vacancies: React.FC = () => {
  const [vacancies, setVacancies] = useState<VacancyInterface[]>();

  useEffect(() => {
    api.get(`/vacancies`)
    .then((vacancies) => {
      setVacancies(vacancies.data);
    })
    .catch(err => {})
  }, []);

  return (
    <MainContainer>
      <ContainerVacancies>
        <Title>Vagas</Title>
        <input className="search"  type="text" />
        <ContainerCards>
          {vacancies?.map(vacancy => <VacancyCard {...vacancy} />)}
        </ContainerCards>
      </ContainerVacancies>
    </MainContainer>
  );
}

export default Vacancies;
