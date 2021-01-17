import styled from 'styled-components';

export const TopNavbar = styled.nav`
  background-color: #B88F73;
  position: sticky;
  width: 100%;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: start;
  padding: 1.25rem;
  color: #222223;
  z-index: 1000;

  a + a {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: #222223;
  }

  a:last-of-type {
    margin-left: auto;
  }
`;
