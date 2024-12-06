import React from "react";
import "./Articles.css";

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
    <div className="articles py-12">
      {items.map((item, index) => (
        <div className="art-card" key={index}>
          <a href="#">
            <h4>{item.title}</h4>
            <div className="art-date">{item.date}</div>
            <img src={item.image} alt={item.title} className="art-image" />
          </a>
          <div className="art-descr">
            <p>{item.description}</p>
          </div>
          <a href="#">
            <span>{item.readmore}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;