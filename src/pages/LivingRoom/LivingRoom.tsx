import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tags from "../../components/Tags/Tags";
import RecentPosts from "../../components/RecentPosts/RecentPosts";
import Search from "../../components/Search/Search";
import ArticlesRoom from "./ArticleRoom";

const bgImage: string = 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg';

const navElements = {
    navbarLogo: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png',
    navbarLinks: [
        'About Us',
        'Living Room',
        'Kitchen',
        'Outdoors',
        'Contact',
    ],
};

const description = {
    firstParagraph: 'Living Room',
    secondParagraph: '',
    thirdParagraph: (
        <>
            <Link to="/">Home</Link> &raquo; Living Room
        </>
    ),
};

const button = {
    buttonBgColor: '',
    buttonContentColor: '',
    buttonContent: '',
};

function LivingRoom() {
    return (
        <div>
            <Header 
                navElements={navElements}
                bgImage={bgImage}
                description={description}
                buttonProps={button}
            />
            <div className="flex mx-20">
                <div className="w-2/3">
                    <ArticlesRoom />
                </div>
                <div className="flex flex-col w-1/3 bg-white p-2">
                    <Search />
                    <RecentPosts />
                    <Tags />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LivingRoom;
