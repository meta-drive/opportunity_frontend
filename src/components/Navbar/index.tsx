import React from 'react';
import { Link } from 'react-router-dom';

import { TopNavbar } from './styles';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    toast.info('Você foi deslogado com sucesso. Volte logo!');
  }

  return (
    <TopNavbar>
      <Link to="/desafios">Desafios</Link>
      {!!user && (
        <Link to="/home">Perfil</Link>
      )}
      {!!user ? (
        <Link to="" onClick={handleLogout}>Sair</Link>
      ) : (
        <Link to="/login">Entrar</Link>
      )}
    </TopNavbar>
  );
}

export default Navbar;
