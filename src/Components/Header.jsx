import React from "react";

const Header = () => {
  return (
    <div className="h-10 flex justify-between items-center">
      <div className="ml-5 flex">
        <div className="header-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="header-button ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="text-gray-300 mr-6 rounded-3xl bg-black flex justify-center items-center text-xs font-body">
        <img
          src="/images/me.jpg"
          alt="profile-pic"
          className="h-5 w-5 rounded-3xl"
        />
        <p className="ml-1 mr-1">Muhittin</p>
        <i className="fas fa-sort-down mr-2 mb-1.5 "></i>
      </div>
    </div>
  );
};

export default Header;
