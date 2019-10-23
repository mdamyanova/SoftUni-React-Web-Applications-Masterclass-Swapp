import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.style.css';

const Header = ({ toggleTheme }) => (
  <div className='header'>
    <a className='header__logo' href='#' onClick={e => toggleTheme()}>
      SWAPP
    </a>
    <div className='header__right'>
    <NavLink to='/episodes' className='nav' activeClassName='active'>
        Episodes
      </NavLink>
      <NavLink to='/characters' className='nav' activeClassName='active'>
        Characters
      </NavLink>
    </div>
  </div>
);

export default Header;
