import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ news }) => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <button className="text-base-100 bg-secondary px-3 py-2 rounded cursor-pointer">
        Latest
      </button>

      <Marquee className="flex gap-5" pauseOnHover={true}>
        {news?.map((singleNews) => (
          <p key={singleNews.id} className="font-bold text-lg">
            {singleNews.title} &nbsp;
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
