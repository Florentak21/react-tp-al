import React from 'react';
import Navbar, { NavbarItem } from './Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';

const navElements: NavbarItem = {
  navbarLogo: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png',
  navbarLinks: [
    'About Us',
    'Living Room',
    'Kitchen',
    'Outdoors',
    'Contact',
  ],
};

function Header(props: { navElements: NavbarItem; bgImage: string }) {
  return (
    <header
      className="header flex flex-col h-screen py-10 px-20 bg-cover bg-no-repeat bg-gradient-to-b from-transparent to-black/20"
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <Navbar navbarLogo={props.navElements.navbarLogo} navbarLinks={props.navElements.navbarLinks} />
      <HeaderContent />
    </header>
  );
}

export default Header;
