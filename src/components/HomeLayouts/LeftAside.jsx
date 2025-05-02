import React, { Suspense } from "react";
import CategoriesBox from "../CategoriesBox";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <CategoriesBox />
      </Suspense>
    </div>
  );
};

export default LeftAside;
