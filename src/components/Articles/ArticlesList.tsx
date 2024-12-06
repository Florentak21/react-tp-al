import React from "react";

interface ArticlesListProps {
  items: {
    title: string;
    date: string;
    image: string;
    description: string;
    readmore: string;
  }[];
}

const ArticlesList = ({ items }: ArticlesListProps) => {
  return (
    <div className="">
      {items.map((item, index) => (
        <div className="pb-6" key={index}>
          <a href="#" className="text-black no-underline">
            <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
            <div className="text-xs text-red-500 mb-4">{item.date}</div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-4"
            />
          </a>
          <div>
            <p className="text-sm text-gray-700 leading-6">
              {item.description}
            </p>
          </div>
          <a href="#" className="text-red-500 font-bold text-sm">
            {item.readmore}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
