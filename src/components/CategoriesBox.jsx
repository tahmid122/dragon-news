import React, { use } from "react";
import { NavLink } from "react-router";
const categoryData = fetch("/categories.json").then((res) => res.json());

const CategoriesBox = () => {
  const categories = use(categoryData);
  return (
    <div>
      <h1 className="font-semibold text-xl">All Category</h1>
      <div className="grid grid-cols-1 gap-5 mt-10 sidenav">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={
              "btn bg-base-100 border-none shadow-none hover:bg-base-200 w-full text-start flex items-center justify-start text-accent text-xl"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBox;
