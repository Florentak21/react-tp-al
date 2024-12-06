import React from "react";
import ArticlesList from "./ArticlesList";
import Pagination from "../Pagination/Pagination";

function Articles() {
  const addarticles1 = [
    {
      title: "Consectetuer vehicula ab",
      date: "November 21, 2017 / Kitchen, Lifestyle",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam voluptate?",
      readmore: "Read More »",
    },
  ];

  const addarticles2 = [
    {
      title: "Taciti hendrerit dis odit incidunt",
      date: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg",
      description:
        "Cillum corrupti accusamus non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem.",
      readmore: "Read More »",
    },
    {
      title: "Sunt doloremque blandit inven",
      date: "November 20, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros.",
      readmore: "Read More »",
    },
  ];

  const addarticles3 = [
    {
      title: "Taciti hendrerit dis odit incidunt",
      date: "November 20, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg",
      description:
        "Cillum corrupti accusamus non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem.",
      readmore: "Read More »",
    },
    {
      title: "Sunt doloremque blandit inven",
      date: "November 20, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros.",
      readmore: "Read More »",
    },
  ];

  const handlePageChange = (page: number) => {
    console.log("Page actuelle :", page);
  };

  return (
    <div className="max-w-3xl space-y-12 gap-5 my-5 pr-16 border-r border-gray-300">
      <div className="w-full border-b border-gray-300">
        <ArticlesList items={addarticles1} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {addarticles2.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <ArticlesList items={[item]} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {addarticles3.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <ArticlesList items={[item]} />
          </div>
        ))}
      </div>
      <Pagination totalPages={3} onPageChange={handlePageChange} />
    </div>
  );
}

export default Articles;