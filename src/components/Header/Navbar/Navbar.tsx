import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export interface NavbarItem {
    navbarLogo: string;
    navbarLinks: string[];
}

function Navbar({ navbarLogo, navbarLinks }: NavbarItem) {
    return (
        <div className='flex justify-between py-5 px-10'>
            <div className="nav-logo w-1/6">
                <Link to="/">
                    <img
                        src={navbarLogo}
                        alt="Logo"
                        className="w-full h-auto"
                    />
                </Link>
            </div>

            <div className="">

                <nav className="w-full mx-auto px-4">
                    <div className="flex flex-row items-center gap-5 mt-3 font-libre font-bold text-[16px] leading-[70px] text-[#F5F5F5]">
                        {navbarLinks.map((link, index) => (
                            <Link 
                                to={`/${link.toLowerCase().replace(/ /g, '-')}`}
                                key={index}
                                className="hover:text-white no-underline"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
