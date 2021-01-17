import React, {useState, useEffect} from 'react';

import { MainContainer, ContainerCards, ContainerVacancies, Title } from './styles';
import { Card } from '../../styles/global';
import api from '../../services/api';

const Challenges: React.FC = () => {

  // const [vacancies, setVacancies] = useState<VacancyInterface[]>();

  useEffect(() => {
    api.get(`/challenges`)
    .then((challenges) => {
     console.log(challenges);
    })
    .catch(err => {})
  }, []);

  return (
    <MainContainer>
      <ContainerVacancies>
        <Title>Vagas</Title>
        <input className="search"  type="text" />
        <ContainerCards>
        {/* {vacancies?.map(vacancy => (
          <Card key={vacancy.id}>
            <div className="title">{vacancy.occupation.name} - {vacancy.occupation.occupation_area}</div>
            <div className="img"></div>
            <div className="description">
              {vacancy.description}
            </div>
          </Card>
        ))} */}
        </ContainerCards>
      </ContainerVacancies>
    </MainContainer>
  );
}

export default Challenges;
