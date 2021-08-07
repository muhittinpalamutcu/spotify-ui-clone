import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ history }) => {
  const location = useLocation();

  const style =
    "flex text-white text-xs items-center font-body bg-gray-400 bg-opacity-25 h-7 rounded cursor-pointer";

  const style2 =
    "flex text-white text-xs mt-3 items-center font-body h-7 rounded cursor-pointer";

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <Link to="/">
        <div className="p-1">
          <div className={location.pathname === "/" ? style + " mt-3" : style2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sidebar-icon text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p className="ml-3">Home</p>
          </div>
        </div>
      </Link>
      <Link to="/search">
        <div className="p-1">
          <div
            className={location.pathname === "/search" ? style : "sidebar-card"}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sidebar-icon text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="ml-3">Search</p>
          </div>
        </div>
      </Link>
      <Link to="/library">
        <div className="p-1">
          <div
            className={
              location.pathname === "/library" ? style : "sidebar-card"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sidebar-icon text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
            </svg>
            <p className="ml-3">Your Library</p>
          </div>
        </div>
      </Link>

      <div className="flex text-xs font-body text-gray-300 mt-6 ml-3 items-center">
        <div className="h-4 w-4 bg-gray-300  items-center justify-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="ml-4">Create Playlist</p>
      </div>
      <div className="flex text-xs font-body text-gray-300 mt-3 ml-3 items-center">
        <div className="h-4 w-4 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2.5 w-2.5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="ml-4">Liked Songs</p>
      </div>

      <div className="mt-4 px-3 text-xs font-body text-gray-300 cursor-pointer">
        <div className="border-t border-gray-800"></div>
        <p className="mt-2">Top Songs - USA</p>
        <p className="mt-2">New Vibes 21</p>
        <p className="mt-2">Honey</p>
        <p className="mt-2">Savage</p>
        <p className="mt-2">Mui</p>
        <p className="mt-2">New Page</p>
        <div className="flex justify-between items-center mt-2">
          <p className="">Coding</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2.5 w-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </div>
        <p className="mt-2">blues</p>
        <p className="mt-2">Debug 🐥</p>
        <div className="mt-2 flex justify-between items-center">
          <p>Мухи</p>
          <div className="h-2.5 w-2.5 border border-gray-400 rounded-full  bg-gray-400 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1.5 w-1.5 text-gray-900 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="mt-2">#</p>
        <Link to="/playlist/lofibeats">
          <p className="mt-2">lofi beats</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
