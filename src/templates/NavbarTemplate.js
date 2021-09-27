import Hamburger from '../components/Hamburger/Hamburger';
import Navbar from '../components/Navbar/Navbar';

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
