import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import RightAside from "./HomeLayouts/RightAside";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const [targetNews, setTargetNews] = useState({});
  const news = useLoaderData();
  useEffect(() => {
    const filteredNews = news.find((n) => n.id === id);
    setTargetNews(filteredNews);
    console.log(filteredNews);
  }, [news, id]);
  const { image_url, details, title, category_id } = targetNews;
  console.log(news);
  return (
    <div className="w-11/12 mx-auto py-3">
      <Header />
      <div className="grid grid-cols-12 gap-6">
        <div className="space-y-5 col-span-8  border border-slate-300 p-5 rounded">
          <h2 className="text-xl font-bold mb-5">Dragon News</h2>
          <img
            className="w-full h-[500px] object-cover"
            src={image_url}
            alt=""
          />
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{details}</p>
          <Link
            to={`/category/${category_id}`}
            className="bg-secondary text-white text-sm py-2 px-4 rounded cursor-pointer"
          >
            All news in this category
          </Link>
        </div>
        <div className="col-span-4">
          <RightAside />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
