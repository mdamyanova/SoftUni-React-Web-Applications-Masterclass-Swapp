import React from 'react';

import './styles/Header.css';

const Header = ({ toggleTheme }) => (
  <div className='header'>
    <a className='header__logo' href='#' onClick={e => toggleTheme()}>
      SWAPP
    </a>
    <div className='header__right'>ala</div>
  </div>
);

export default Header;
