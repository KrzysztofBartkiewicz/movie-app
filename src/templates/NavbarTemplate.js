import React, { useContext } from 'react';
import Hamburger from '../components/Hamburger/Hamburger';
import Navbar from '../components/Navbar/Navbar';
import RootContext from '../context';

const NavbarTemplate = ({ children }) => {
  return (
    <>
      <Hamburger />
      <Navbar />
      {children}
    </>
  );
};

export default NavbarTemplate;
