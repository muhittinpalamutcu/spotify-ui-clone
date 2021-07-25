import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="p-1">
        <div className="flex text-white text-xs mt-3 items-center font-body bg-gray-400 bg-opacity-25 h-7 rounded cursor-pointer">
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
      <div className="sidebar-card p-1">
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
      <div className="sidebar-card p-1">
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
        <div className="h-4 w-4 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
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

      <div className="mt-4 px-3 text-xs font-body text-gray-300">
        <div className="border-t border-gray-800"></div>
        <p className="mt-2">Top Songs - USA</p>
        <p className="mt-2">New Vibes 21</p>
        <p className="mt-2">Honey</p>
        <p className="mt-2">Savage</p>
        <p className="mt-2">Mui</p>
        <p className="mt-2">New Page</p>
        <p className="mt-2">Coding</p>
        <p className="mt-2">blues</p>
        <p className="mt-2">Debug 🐥</p>
        <p className="mt-2">Мухи</p>
        <p className="mt-2">#</p>
        <p className="mt-2">lofi beats</p>
      </div>
    </div>
  );
};

export default Sidebar;
