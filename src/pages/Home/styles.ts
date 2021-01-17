import styled from 'styled-components';

import { shade } from 'polished';
import background from './assets/background.svg';

export const HomeContainer = styled.div`
  background: url(${background}) no-repeat center fixed;
  background-size: cover;
  height: 100vh;

  .home-content {
    width: 80%;
    max-width: 940px;
    margin: 0 auto;
    padding: 2rem 0;

    .search-container {
      display: flex;
      align-items: stretch;
      margin-bottom: 3rem;

      input {
        padding: 1rem;
        width: 60%;
      }

      button {
        width: 3rem;
        margin-left: 1rem;
        background-color: #723915;
        border: 0;
        border-radius: 50%;
        color: #ffffff;
        transition: backgroud-color 0.5s ease;
        cursor: pointer;
      }

      button:hover {
        background-color: ${shade(0.2, '#723915')}
      }
    }

    .banner {
      width: 100%;
      background-color: #ffffff;
      border-radius: 7px;
      box-shadow: 0 0 0.4rem;
    }

    .occupation-container {
      display: flex;
      align-items: stretch;
      margin: 2rem 0;

      .botoes {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 7px;
        box-shadow: 0 0 0.4rem;

        button {
          background-color: #ccccce;
          padding: 0.7rem 1rem;
          border: 0;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.5s ease;
        }

        button:hover {
          background-color: ${shade(0.4, '#ffffff')}
        } 

        button + button {
          margin-top: 0.7rem;
        }
      }

      .occupations {
        margin-left: 2rem;
        border-radius: 7px;
        background-color: #ffffff;
        flex: 1;
        box-shadow: 0 0 0.4rem;
      }
    }
  }

  @media screen and (max-width: 720px) {
    .occupation-container {
      flex-direction: column;
    }
  }
`;
