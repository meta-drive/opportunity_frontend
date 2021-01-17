import styled, { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: #333334;
  }
`;

export const FormContainer = styled.div`
  width: 480px;
  max-width: 80vw;
  padding: 2rem 4rem;
  margin: 2rem auto;
  background-color: #ffffff;
  box-shadow: 0 0 10px;
  border-radius: 60px;
  background-color: #723915;
  opacity: 90%;
  color: #ffffff;
  z-index: 1;

  h1 {
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'Londrina Solid', cursive;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input, textarea {
    margin-bottom: 1rem;
    padding: 0.7rem;
    border: 0;
    border-radius: 7px;
  }

  button.btn-primary {
    background-color: #EB7231;
    align-self: flex-end;
    margin-top: 2rem;
    color: #ffffff;
    width: 30%;
    min-width: 140px;
    padding: 0.5rem;
    border: 0;
    border-radius: 2rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${shade(0.2, '#EB7231')};
      cursor: pointer;
    }
  }
`
