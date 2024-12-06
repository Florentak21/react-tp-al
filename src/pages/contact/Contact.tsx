import React from "react";
import Header from "./Header/Header";
import { NavbarItem } from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map"

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
function Home()
{
   return (
    <div>
        <Header navElements={navElements} bgImage = {bgImage} />
        <div className="flex w-[100%]">
            <Map/>
        </div>
        
        <Footer />
    </div>
   );
}

export default Home;