import React, {useState, useEffect} from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

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

type DetailParams = {
  id: string; 
};

type DetailProps = RouteComponentProps<DetailParams>;

const Challenge: React.FC<DetailProps> = ({ match }) => {

  const [challenges, setChallenges] = useState<ChallengeInterface>();

  useEffect(() => {
    api.get(`/challenges/${match.params.id}`)
    .then((challenge) => {
      setChallenges(challenge.data)
     console.log(challenge);
    })
    .catch(err => {})
  }, []);

  return (
    <MainContainer>
      <ContainerVacancies>
        <Title>Vagas</Title>
        <input className="search"  type="text" />
        <ContainerCards>
        </ContainerCards>
      </ContainerVacancies>
    </MainContainer>
  );
}

export default withRouter(Challenge);
