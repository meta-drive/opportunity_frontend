import React, {useState, useEffect} from 'react';

import { MainContainer, ContainerCards, ContainerVacancies, Title } from './styles';
import { Card } from '../../styles/global';
import api from '../../services/api';

import image from '../../images/Background-com-roboCCR.svg';

interface QuestionInterface {
  id: number,
  title: string,
  description: string,
}

interface CompanyInterface {
  id: number,
  occupation_area: string,
  company_name: string,
}
interface ChallengeInterface {
  id: number,
  company_id: number,
  title: string,
  description: string,
  questions: QuestionInterface[],
  company: CompanyInterface,
}

const Challenges: React.FC = () => {

  const [challenges, setChallenges] = useState<ChallengeInterface[]>();

  useEffect(() => {
    api.get(`/challenges`)
    .then((challenges) => {
      setChallenges(challenges.data)
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
        {challenges?.map(challenge => (
          <Card key={challenge.id}>
            <div className="title">{challenge.title}</div>
            <div className="img">
              <img src={image}/>
            </div>
            <div className="description">
              {challenge.description}
            </div>
          </Card>
        ))}
        </ContainerCards>
      </ContainerVacancies>
    </MainContainer>
  );
}

export default Challenges;
