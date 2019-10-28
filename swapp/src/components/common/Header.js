import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.style.css';

const Header = ({ toggleTheme }) => (
  <div className='header'>
    <a className='header_logo' href='#' onClick={e => toggleTheme()}>
      SWAPP
    </a>
    <div className='header_right'>
    <NavLink to='/episodes' className='nav' activeClassName='active'>
        Episodes
      </NavLink>
      <NavLink to='/characters' className='nav' activeClassName='active'>
        Characters
      </NavLink>
      <NavLink to='/characters/1' className='nav' activeClassName='active'>
        Character
      </NavLink>
    </div>
  </div>
);

export default Header;
