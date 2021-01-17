import React from 'react';

import { HomeContainer } from './styles';
import banner from './assets/banner.png';
import { FaSearch } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="home-content">
          <div className="search-container">
            <input placeholder="Pesquise vagas, desafios ou empresas" />
            <button><FaSearch /></button>
          </div>

          <img src={banner} alt="" className="banner"/>

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
