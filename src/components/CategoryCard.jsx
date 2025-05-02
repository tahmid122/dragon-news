import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const CategoryCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details, id } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md mb-5">
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3 ">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <MdBookmarkBorder size={24} />
          <IoMdShare size={24} />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-lg leading-snug">{title}</h2>
        <figure className="my-2">
          <img
            src={image_url}
            alt="News"
            className="rounded-md w-full h-[300px] object-cover"
          />
        </figure>
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...{" "}
          <Link
            to={`/news/${id}`}
            className="font-medium cursor-pointer text-secondary"
          >
            Read More
          </Link>
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex  justify-center items-center gap-1 text-yellow-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="font-medium text-gray-800">{rating.number}</span>
          </div>
          <div className="flex justify-center  items-center gap-1 text-gray-500">
            <FaEye size={20} />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
