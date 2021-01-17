import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

import background from '../../images/background.svg';
import robo from '../../images/robo.svg';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const ImgRobo = styled.div`
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translate(-50%,-50%);
  background: url(${robo}) no-repeat center;
  background-size: 640px;
  width: 640px;
  height: 640px;
  max-width: 95vw;
`;

export const ActionButton = styled(Link)`
  margin: 0.2rem auto;
  background-color: #EB7231;
  padding: 0.7rem;
  color: #ffffff;
  text-align: center;
  width: 240px;
  max-width: 80%;
  text-decoration: none;
  border-radius: 10px;
  z-index: 1;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${shade(0.2, '#EB7231')}
  }
`;