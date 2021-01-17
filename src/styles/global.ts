import styled, { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

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

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input, textarea {
    margin-bottom: 1rem;
    padding: 0.7rem;
    border: 1px solid #723915;
    border-radius: 7px;
  }

  button.btn-primary {
    background-color: #723915;
    align-self: flex-end;
    color: #ffffff;
    width: 30%;
    min-width: 140px;
    padding: 0.5rem;
    border: 0;
    border-radius: 2rem;

    &:hover {
      background-color: ${shade(0.2, '#723915')};
      cursor: pointer;
    }
  }
`
