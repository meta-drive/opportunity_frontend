import React, { useEffect, useState } from 'react';

import { HomeContainer } from './styles';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';
import VacancyCard from '../../components/Vacancy/index';

interface Vacancy {
  id: number,
  description: string,
  occupation: {
    name: string,
    occupation_area: string
  }
}

const Home: React.FC = () => {const [vacancies, setVacancies] = useState<Vacancy[]>();

  useEffect(() => {
    api.get(`/vacancies`)
    .then((vacancies) => {
      setVacancies(vacancies.data);
    })
    .catch(err => {})
  }, []);

  return (
    <HomeContainer>
      <div className="home-content">
          <div className="search-container">
            <input placeholder="Pesquise vagas, desafios ou empresas" />
            <button><FaSearch /></button>
          </div>

          <div className="banner">
            <p>"Bons profissionais executam ordens, enquanto excelentes profissionais pensam pela empresa."
              <br />- Augusto Cury</p>
          </div>

          <div className="occupation-container">
            <div className="botoes">
              <button>Educação</button>
              <button>FAQ</button>
              <button>Dicas Profissionais</button>
            </div>
            <div className="occupations">
              {vacancies?.slice(0,3).map(vacancy => <VacancyCard {...vacancy} />)}
            </div>
          </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
