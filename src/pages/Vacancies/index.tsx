import React, {useState, useEffect} from 'react';

import { MainContainer, ContainerCards, ContainerVacancies, Title } from './styles';
import { Card } from '../../styles/global';
import api from '../../services/api';

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
        {vacancies?.map(vacancy => (
          <Card key={vacancy.id}>
            <div className="title">{vacancy.occupation.name} - {vacancy.occupation.occupation_area}</div>
            <div className="img"></div>
            <div className="description">
              {vacancy.description}
            </div>
          </Card>
        ))}
        </ContainerCards>
      </ContainerVacancies>
    </MainContainer>
  );
}

export default Vacancies;
