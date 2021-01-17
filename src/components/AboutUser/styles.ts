import styled from 'styled-components';

export const Container = styled.div`
  border: solid 1px #723915;
  padding: 15px 15px;
  margin: 20px;
  border-radius: 20px;
  width: 100%;
  min-height: 250px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Text = styled.div`
  margin-top:10px;
`;
