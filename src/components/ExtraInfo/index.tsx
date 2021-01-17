import React, {useEffect, useState} from 'react';

import { useAuth } from  '../../context/AuthContext';
import Interest from '../Interest';
import Academic from '../Academic';
import Experience from '../Experience';

import { Container, Card } from './styles';

const ExtraInfo: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Card>
        <Interest />
      </Card>
      <Card>
        <Academic />
      </Card>
      <Card>
        <Experience />
      </Card>

    </Container>
  );
}

export default ExtraInfo;