import React from "react";
import ArticlesList from "../../components/Articles/ArticlesList";
import Pagination from "../../components/Pagination/Pagination";

const handlePageChange = (page: number) => {
    console.log("Page actuelle :", page);
};

function ArticlesRoom() {
  const addarticles1 = [
    {
      title: "Taciti hendrerit dis odit incidunt",
      date: "November 21, 2017 / Kitchen, Lifestyle",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg",
      description:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]",
      readmore: "Read More »",
    },
  ];

  const addarticles2 = [
    {
      title: "Sunt doloremque blandit inven",
      date: "November 20, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      readmore: "Read More »",
    },
    {
      title: "Fugit quaerat vulputate! Irure.",
      date: "November 20, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg",
      description:
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
      readmore: "Read More »",
    },
  ];

  const addarticles3 = [
    {
      title: "Litora aptent magnam laoreet!",
      date: "November 7, 2017 / Living Room",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
      readmore: "Read More »",
    },
    {
      title: "Ex maxime quibusdam quam",
      date: "April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      readmore: "Read More »",
    },
  ];

  return (
    <div className="space-y-12 gap-5 my-5  pr-16 border-r border-gray-300">
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
      <Pagination totalPages={2} onPageChange={handlePageChange} />
    </div>
  );
}

export default ArticlesRoom;