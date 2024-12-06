import React from "react";
import Header from "../../components/Header/Header";
import Articles from "../../components/Articles/Articles";
import Footer from "../../components/Footer/Footer";
import Tags from "../../components/Tags/Tags";
import RecentPosts from "../../components/RecentPosts/RecentPosts";
import Search from "../../components/Search/Search";

const bgImage: string = 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero02-free-img.jpg';

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
    firstParagraph: 'Coming Home Never',
    secondParagraph: 'Felt So Good!',
    thirdParagraph: 'Quam a diamlorem explicabo quos fugit, ut aliquam modi.',
};

const button = {
    buttonBgColor: '#E70036',
    buttonContentColor: '#F3DFE3',
    buttonContent: 'FIND YOUR STYLE',
};

function Home() {
    return (
        <div>
            <Header 
                navElements={navElements}
                bgImage={bgImage}
                description={description}
                buttonProps={button}
            />
            <div className="flex w-full">
                <div className="section-container w-2/3">
                    <Articles />
                    <Pagination />
                </div>
                <div className="flex flex-col w-1/3 ml-auto bg-white p-2">
                    <Search />
                    <RecentPosts />
                    <Tags />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
