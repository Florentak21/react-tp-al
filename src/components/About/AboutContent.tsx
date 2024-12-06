import React from "react";
import "./AboutContent.css"

function AboutContent()
{
   return (
    <div className="bg-white flex flex-col justify-between h-screen">
      <div className="content-top w-full flex justify-center p-40">
            <div className="left w-2/5">
                <img
                    src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/pic14-free-img.png"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-10 w-3/5 py-14 ml-10 text-left">
                <h2 className="font-montserrat text-4xl font-bold">Working Since 1995</h2>
                <hr className="w-1/6 border-[#FF0E47]"/>
                <p className="font-libre">
                    Taciti alias conubia, senectus, soluta nisl interdum vitae eius
                    habitant metus dapibus quis eos, risus, vehicula! Egestas qui
                    interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias
                    conubia, senectus, soluta nisl interdum vitae eius habitant metus.
                </p>
                <h3 className="text-2xl font-montserrat font-bold italic">Design is a funny word</h3>
                <p className="font-libre">
                    Taciti alias conubia, senectus, soluta nisl interdum vitae eius
                    habitant metus dapibus quis eos, risus, vehicula! Egestas qui
                    interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias
                    conubia, senectus, soluta nisl interdum vitae eius habitant metus.
                </p>
            </div>
        </div>

        <div className="w-full h-60 flex items-center justify-center bg-gray-200 gap-40">
            <div className="flex items-center justify-center">
                <img
                src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-1.png"
                alt=""
                />
            </div>
            <div className="flex items-center justify-center">
                <img
                src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png"
                alt=""
                />
            </div>
            <div className="flex items-center justify-center">
                <img
                src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-5.png"
                alt=""
                />
            </div>
            <div className="flex items-center justify-center">
                <img
                src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png"
                alt=""
                />
            </div>
            <div className="flex items-center justify-center">
                <img
                src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png"
                alt=""
                />
            </div>
        </div>

    </div>
   );
}

export default AboutContent;