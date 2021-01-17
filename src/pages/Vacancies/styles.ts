import styled from 'styled-components';

import background from '../../images/BackgroundCCR.svg';

export const MainContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: scroll;

  padding-top: 100px;
  padding-bottom: 100px;

  background: url(${background}) no-repeat center;
  background-size: 100%;
  background-clip: border-box;
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ContainerVacancies = styled.div`
  max-width: 1280px;
  width: 90%;
  border: 1px solid #723915;
  padding: 50px 50px;
  border-radius: 30px;
  position: relative;
  background-color: rgba(232, 230, 230, 0.3);

  .search {
    border: none;
    border: 1px solid #723915;
    padding: 10px 5px;
    border-radius: 10px;
    width: 200px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.div`
    border: 1px solid #723915;
    font-size: 20px;
    position: absolute;
    width: 50%;
    top: -20px;
    left: 25%;
    margin: 0;
    border-radius: 10px;
    background-color: rgba(232, 230, 230, 0.7);
    padding: 10px 15px;
    text-align: center;
`;
