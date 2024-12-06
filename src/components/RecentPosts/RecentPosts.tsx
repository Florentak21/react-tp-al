import React from "react";
import recentpost1 from "../../assets/recentpost1.jpg";
import recentpost2 from "../../assets/recentpost2.jpg";
import recentpost3 from "../../assets/recentpost3.jpg";
import recentpost4 from "../../assets/recentpost4.jpg";
import recentpost5 from "../../assets/recentpost5.jpg";

function RecentPosts() {
  const posts = [
    {
      image: recentpost1,
      title: "Consectetuer vehicula ab",
      description: "In kitchen Lifestyle",
    },
    {
      image: recentpost2,
      title: "Taciti hendrerit dis odit incidunt",
      description: "In Kitchen, Living Room, Reading Room",
    },
    {
      image: recentpost3,
      title: "Sunt doloremque blandit inven",
      description: "In Living Room",
    },
    {
        image: recentpost4,
        title: "Fugit quaerat vulputate! Irure.",
        description: "In Living Room",
    },
    {
        image: recentpost5,
        title: "Litora aptent magnam laoreet!",
        description: "In Living Room",
    },
  ];

  return (
    <div className="border-2 divide-y divide-gray-300 border-gray-200 py-12 px-10 ml-9 mb-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex justify-around w-full gap-8 mb-5"
        >
            <img
              src={post.image}
              alt={`Post ${index + 1}`}
              className="inline-block object-cover w-1/3 h-[100px]"
            />
          <div className="w-2/3">
            <a
              href="#"
              className="text-[#E70036] text-lg font-semibold transition duration-300"
            >
              {post.title}
            </a>
            <p className="mt-2">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;
