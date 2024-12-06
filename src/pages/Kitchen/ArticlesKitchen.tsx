import React from "react";
import ArticlesList from "../../components/Articles/ArticlesList";

function ArticlesKicthen() {
  const addarticles1 = [
    {
      title: "Consectetuer vehicula ab",
      date: "November 21, 2017 / Kitchen, Lifestyle",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]",
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
      title: "Sodales arcu consequatur consectetur",
      date: "August 8, 2017 / Kitchen",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg",
      description:
        "Consectetur dolor sit amet adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class",
      readmore: "Read More »",
    },
  ];

  const addarticles3 = [
    {
      title: "Imperdiet phasellus aliquam",
      date: "June 17, 2017 / Kitchen",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/06/pic09-free-img.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in",
      readmore: "Read More »",
    },
    {
      title: "Impedit sit.",
      date: "October 5, 2010 / Kitchen, Lifestyle",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2010/10/furnished-kitchen.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros.",
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
    </div>
  );
}

export default ArticlesKicthen;