import React from "react";
import "./Articles.css";
import ArticlesList from "./ArticlesList";

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

  return (
    <div>
      <div className="article-part1">
        <ArticlesList items={addarticles1} />
      </div>
      <div className="article-part2">
        <ArticlesList items={addarticles2} />
      </div>
      <div className="article-part2">
        <ArticlesList items={addarticles3} />
      </div>
    </div>
  );
}

export default Articles;