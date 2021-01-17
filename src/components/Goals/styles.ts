import styled from 'styled-components';

import mapaObjetivosMobile from '../../assets/images/mapa-objetivos-mobile.svg';
import mapaObjetivos from '../../assets/images/mapa-objetivos.svg';

interface BalloonInterface {
  alignSelf: string,
}

export const Container = styled.div`
  background-image: url(${mapaObjetivos});
  background-clip: border-box;
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin-bottom: 30px;
  border: solid 1px #723915;
  border-radius: 8px;
  position: relative;
  height: 300px;

  @media (max-width: 768px) {
    background-image: url(${mapaObjetivosMobile});
    height: 768px;
  }
`;

export const Title = styled.h2`
  border: 1px solid #723915;
  position: absolute;
  width: 50%;
  top: -15px;
  left: 25%;
  margin: 0;
  border-radius: 10px;
  background-color: #E8E6E6;
  padding: 5px 15px;
  text-align: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 20px;
  padding: 30px 10px;

  @media (max-width: 768px) {
    padding-left: 30%; 
    padding-right: 30%; 
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    padding-left: 10%; 
    padding-right: 10%; 
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Balloon = styled.div<BalloonInterface>`
  align-self: ${props => props.alignSelf};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #723915;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
