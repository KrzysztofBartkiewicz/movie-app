import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import RootContext from '../context';

const NavbarTemplate = ({ children }) => {
  const context = useContext(RootContext);
  const { isNavbarVisible } = context;

  return (
    <>
      {isNavbarVisible ? <Navbar /> : null}
      {children}
    </>
  );
};

export default NavbarTemplate;
