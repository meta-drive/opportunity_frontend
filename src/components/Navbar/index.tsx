import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaBars } from 'react-icons/fa';
import { TopNavbar } from './styles';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const [ menuOpen, SetMenuOpen ] = useState(false);

  const handleLogout = () => {
    signOut();
    toast.info('Você foi deslogado com sucesso. Volte logo!');
  }

  const handleMenuClick = () => SetMenuOpen(!menuOpen);

  return (
    <TopNavbar>
      <div className={menuOpen ? 'open' : ''}>
        {!!user ? (
          <>
            <NavLink to="/home">Início</NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
          </>
        ) : (
          <NavLink to="/">Início</NavLink>
        )}

        <NavLink to="/desafios">Desafios</NavLink>

        {!!user ? (
          <Link to="" onClick={handleLogout}>Sair</Link>
        ) : (
          <NavLink to="/login">Entrar</NavLink>
        )}
      </div>
      <FaBars onClick={handleMenuClick} />
    </TopNavbar>
  );
}

export default Navbar;
