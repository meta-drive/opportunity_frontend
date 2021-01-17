import React, {Component, useState} from 'react';
import { useAuth } from  '../../context/AuthContext';

import { Container, Content } from './styles';

// interface AboutUserInterface {
//   className: string,
//   modalRef: string,
// }
interface ModalInterface {
  on: boolean,
  closeModal: CallableFunction,
}

const AboutUser: React.FC<ModalInterface> = ({on, closeModal, children}) => {

  const { user, token } = useAuth();


  return (
      <Container on={on}>
        <Content>
          <button onClick={() => closeModal(false)}>fechar</button>
          {children}
          text here
        </Content>
      </Container>
  );
}

export default AboutUser;
