import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactContent from "./ContactContent";


const bgImage: string = 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/lady-in-balcony.jpg';

const navElements = {
    navbarLogo: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png',
    navbarLinks: [
        'About Us',
        'Living Room',
        'Kitchen',
        'Outdoors',
        'Contact'
    ]
}

const description = {
    firstParagraph: 'Get In Touch',
    secondParagraph: '',
    thirdParagraph: '',
};



function Contact()
{
   return (
    <div>
        <Header
            navElements={navElements}
            bgImage = {bgImage}
            description={description}
        />
        <ContactContent />
        <Footer />
    </div>
   );
}

export default Contact;