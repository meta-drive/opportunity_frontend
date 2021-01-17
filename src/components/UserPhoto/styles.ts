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

  .level {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    right: -5px;
    margin: 0;
    padding: 0;
    background-color: transparent;
    z-index: 99;
  }
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
  position: absolute;
  width: 30%;
  height: 30%;
  top: -25px;
  right: -5px;
  margin: 0;
  border-radius: 10px;
  background-color: transparent;
  padding: 5px 15px;
  z-index: 99;

  img {
    border: 1px solid red;
  }
`;
