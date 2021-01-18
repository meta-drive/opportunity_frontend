import React from 'react';

import { Card } from '../../styles/global';
import background from '../../images/background-robo.svg';

interface Vacancy {
  id: number,
  description: string,
  occupation: {
    name: string,
    occupation_area: string
  }
}

const VacancyCard: React.FC<Vacancy> = (vacancy) => {
  return (
    <Card key={vacancy.id}>
      <div className="title">{vacancy.occupation.name}</div>
      <div className="img">
        <img src={background} alt="Vaga"/>
      </div>
      <div className="description">
        {vacancy.description}
      </div>
    </Card>
  );
}

export default VacancyCard;
