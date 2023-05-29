import { usePaginationStore } from "../store/usePagination";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pagination = () => {
  const { setCurrentPage } = usePaginationStore((state) => state);
  const [isActive, setIsActive] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    setIsActive(page);
  };

  return (
    <div>
      {pages.map((page) => {
        return (
          <Link
            to={"#"}
            onClick={() => handleClick(page)}
            key={page}
            type="button"
            className={
              isActive === page
                ? "border border-gray-300 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 : mr-2 mb-2 bg-white"
                : "border border-gray-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-900"
            }
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default Pagination;
