import styled from 'styled-components';

interface ModalInterface {
  on: boolean
}

export const Container = styled.div<ModalInterface>`
  display: ${props => (props.on ? 'flex' : 'none')};
  position: fixed;
  margin: 0;
  padding: 0;

  justify-content:center;
  align-items: center; 
  top:0;
  left: 0;
  width: 100%;
  height: 100%;

`;

export const Content = styled.div`
  background-color: #FFF;
  box-shadow: 2px 2px 2px 2px #6f7375, -1px -1px 2px 1px #6f7375;
  width: 600px;
  min-height: 200px;
`; 

