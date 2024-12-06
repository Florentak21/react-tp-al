import React from "react";
import ArticlesList from "../../components/Articles/ArticlesList";

function ArticlesOutdoors() {
  const addarticles1 = [
    {
      title: "Icinia soluta. Lacus quas.",
      date: "November 7, 2017 / Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg",
      description:
        "Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]",
      readmore: "Read More »",
    },
  ];

  const addarticles2 = [
    {
      title: "Eleifend sodales molestiae deserunt",
      date: "November 2, 2017 / Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic06-free-img.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      readmore: "Read More »",
    },
    {
      title: "Crporis quae purus inventore!",
      date: "October 17, 2017 / Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/10/pic07-free-img.jpg",
      description:
        "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      readmore: "Read More »",
    },
  ];

  const addarticles3 = [
    {
      title: "Ex maxime quibusdam quam",
      date: "April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      readmore: "Read More »",
    },
    {
      title: "Natoque odio amet autem parturient",
      date: "March 15, 2012 / Living Room, Outdoors",
      image:
        "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2012/03/pic21-free-img.jpg",
      description:
        "Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a",
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

export default ArticlesOutdoors;