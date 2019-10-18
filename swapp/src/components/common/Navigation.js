import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  if (!sessionStorage.getItem('authtoken')) {
    return null;
  }

  return (
    <div id='menu'>
      <div className='title'>Navigation</div>
      <NavLink to='/login' className='nav' activeClassName='active'>
        Login
      </NavLink>
    </div>
  );
};

export default Navigation;
