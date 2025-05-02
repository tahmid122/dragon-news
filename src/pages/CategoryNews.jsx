import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryCard from "../components/CategoryCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Dragon News Home</h2>

      {news?.map((news) => (
        <CategoryCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default CategoryNews;
