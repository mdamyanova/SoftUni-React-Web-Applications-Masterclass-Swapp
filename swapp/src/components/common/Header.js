import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.style.css';
import SwappLogo from './SwappLogo';

const Header = () => (
  <div className='header'>
    <div className='headerLogo'>
      <SwappLogo />
    </div>
    <div className='headerRight'>
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
