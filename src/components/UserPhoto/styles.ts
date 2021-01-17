import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 40%;
    margin-right: 10px;
  }
`;

export const ContainerPhoto = styled.div`
  margin-top:10px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #8C240D;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 70%;
  }
`;

export const Level = styled.div`
  border: 1px solid #723915;
  position: absolute;
  min-width: 30%;
  min-height: 30%;
  top: -25px;
  right: -5px;
  margin: 0;
  border-radius: 10px;
  background-color: #E8E6E6;
  padding: 5px 15px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; 
`;
