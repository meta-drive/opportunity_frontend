import styled from 'styled-components';

export const TopNavbar = styled.nav`
  background-color: #B88F73;
  color: #222223;
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  align-items: flex-start;
  z-index: 1000;

  div {
    display: flex;
    justify-content: start;
    align-items: center;
    flex: 1;

    a {
      text-decoration: none;
      color: #eeeeff;
      padding: 1.25rem;
    }

    a:hover, a.active {
      background-color: #333333;
    }

    a:last-of-type {
      margin-left: auto;
    }
  }

  svg {
    display: none;
    color: #eeeeff;
    margin: 1.25rem;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    div {
      flex-direction: column;
      justify-content: stretch;

      a {
        width: 100%;
      }

      &:not(.open) a.active {
        background-color: #333333;
      }

      a:not(.active) {
        display: none;
      }

      &.open a {
        display:block;
      }
    }

    svg {
      display: block;
    }
  }
`;
