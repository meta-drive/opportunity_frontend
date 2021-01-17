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
  width: 50%;
  top: -15px;
  left: 25%;
  margin: 0;
  border-radius: 10px;
  background-color: #E8E6E6;
  padding: 5px 15px;
  text-align: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  flew-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

export const Img = styled.img`
  width: 40%;
`;
