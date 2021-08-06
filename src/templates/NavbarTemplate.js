import React, { useContext } from 'react';
import Hamburger from '../components/Hamburger/Hamburger';
import Navbar from '../components/Navbar/Navbar';
import RootContext from '../context';

const NavbarTemplate = ({ children }) => {
  const context = useContext(RootContext);
  const { isNavbarVisible } = context;

  return (
    <>
      <Hamburger />
      {isNavbarVisible ? <Navbar /> : null}
      {children}
    </>
  );
};

export default NavbarTemplate;
