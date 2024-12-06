import React from "react";
import Header from "../../components/Header/Header";
import { NavbarItem } from "../../components/Header/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutContent from "../../components/About/AboutContent";
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

const bgImage: string = 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/lady-in-balcony.jpg';
function Home()
{
   return (
    <div>
        <Header navElements={navElements} bgImage = {bgImage} />
        <AboutContent />
        <Footer />
    </div>
   );
}

export default Home;