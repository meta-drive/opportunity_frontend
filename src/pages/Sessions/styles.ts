import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ActionButton = styled(Link)`
  margin: 0.2rem auto;
  background-color: #723915;
  padding: 0.7rem;
  color: #ffffff;
  text-align: center;
  width: 240px;
  max-width: 80%;
  text-decoration: none;
  border-radius: 10px; 

  &:hover {
    background-color: ${shade(0.2, '#723915')}
  }
`;