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
