import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const NavbarTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavbarTemplate;
