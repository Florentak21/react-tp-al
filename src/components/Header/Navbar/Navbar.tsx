import React from 'react';
import './Navbar.css';

export interface NavbarItem {
    navbarLogo: string;
    navbarLinks: string[];
}

function Navbar({ navbarLogo, navbarLinks }: NavbarItem){
    return(
        <div className='flex justify-between py-5 px-10'>
            <div className="nav-logo w-1/6">
                <a className="text-black " href="#">
                    <img
                        src={navbarLogo}
                        alt=""
                        className="w-full h-auto"
                    />
                </a>
            </div>

            <div className="">
                <nav className="w-full mx-auto px-4">
                    <div className="flex flex-row items-center gap-5 mt-3 text-white font-bold text-2xl">
                        {navbarLinks.map((link, index) => (
                            <a href="#" key={index} className="text-stone-100 hover:text-slate-50  no-underline">
                                {link}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar;