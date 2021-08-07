import React from "react";

const ActivityBar = () => {
  return (
    <div>
      <div className="flex mt-3 ml-2 justify-between">
        <p className="text-white font-body text-tiny font-semibold">
          Friend activity
        </p>
        <div className="bg-black mr-2 rounded-full hover:bg-gray-800 bg-opacity-20 flex items-center justify-center p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
        </div>
      </div>
      <div className=" flex items-start font-body text-gray-300 mt-5 ml-2 ">
        <div className="w-8">
          <img
            src="/images/me.jpg"
            alt="friend-img"
            className="w-full h-8 object-cover rounded-full"
          />
        </div>
        <div className="ml-5">
          <p className="text-tiny font-semibold">Muhittin</p>
          <p className="text-xs">Awful Things</p>
          <div className="flex text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <p className="ml-1">Coding</p>
          </div>
        </div>
        <div className="text-xs ml-20">
          <p>4 hr</p>
        </div>
      </div>
      <div className=" flex items-start font-body text-gray-300 mt-5 ml-2 ">
        <div className="w-8">
          <img
            src="/images/me2.jpg"
            alt="friend-img"
            className="w-full h-8 object-cover rounded-full"
          />
        </div>
        <div className="ml-5">
          <p className="text-tiny font-semibold">mui.coding</p>
          <p className="text-xs">U Said</p>
          <div className="flex text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <p className="ml-1">#</p>
          </div>
        </div>
        <div className="text-xs ml-20">
          <p>2 hr</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
