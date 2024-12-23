import React from 'react';
import Navbar, { NavbarItem } from './Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';
import { ContentDescriptionItem } from './HeaderContent/ContentDescription/ContentDescription';
import { ContentButtonItem } from './HeaderContent/ContentButton/ContentButton';

function Header(props: {
    navElements: NavbarItem;
    bgImage: string;
    description: ContentDescriptionItem;
    buttonProps?: ContentButtonItem;
}) {
    return (
        <header
            className="header flex flex-col w-full h-screen py-10 px-40 bg-cover bg-no-repeat bg-gradient-to-b from-transparent to-black/70"
            style={{ backgroundImage: `url(${props.bgImage})` }}
        >
            <Navbar navbarLogo={props.navElements.navbarLogo} navbarLinks={props.navElements.navbarLinks} />
            <HeaderContent description={props.description} button={props.buttonProps} />
        </header>
    );
}

export default Header;
