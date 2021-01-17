import React from 'react';

import { HomeContainer } from './styles';
import { FaSearch } from 'react-icons/fa';

const Home: React.FC = () => {
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

            </div>
          </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
