import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  border: solid 1px #723915;
  padding: 10px;
  padding-top: 40px;
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.h2`
  border: 1px solid #723915;
  position: absolute;
  min-width: 60%;
  top: -15px;
  left: -5px;
  margin: 0;
  border-radius: 10px;
  background-color: #E8E6E6;
  padding: 5px 15px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContentInfo = styled.div`

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  p {
    padding: 5px; 
  }
`;

export const IsPcdIMG = styled.img`
  width: 20px;
  float: right;
  margin-left: 10px;
`;