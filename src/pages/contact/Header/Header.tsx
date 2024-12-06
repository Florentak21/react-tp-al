import React from 'react';
import Navbar, { NavbarItem } from '../../../components/Header/Navbar/Navbar';
import ContactHeader from './ContactHeader/ContactHeader';

const navElements: NavbarItem = {
    navbarLogo: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png',
    navbarLinks: [
        'About Us',
        'Living Room',
        'Kitchen',
        'Outdoors',
        'Contact'
    ]
}

const bgImage: string = 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg';

function Contact(props: { navElements: NavbarItem; bgImage: string }) {
  return (
    <header
      className="header flex flex-col h-94 py-10 px-20 bg-cover bg-no-repeat bg-gradient-to-b from-transparent to-black/20"
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <Navbar navbarLogo={props.navElements.navbarLogo} navbarLinks={props.navElements.navbarLinks} />
      <ContactHeader />
    </header>
  );
}

export default Contact;
