import React from "react";

const Player = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-3 flex justify-center items-center">
        <img className="w-8 h-8" src="./images/player-pic.png" alt="song-img" />
        <div className="ml-3 p-0">
          <p className="text-gray-300 font-body font-semibold text-xs">
            Genie In a Bottle
          </p>
          <p className="text-mini font-body text-gray-400">
            Christina Aguilera
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-gray-500 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="mr-7">
            <i className="fas fa-random text-green-600 text-xs"></i>
          </div>
          <div className="mr-5">
            <i className="fas fa-step-backward text-gray-300 text-xs"></i>
          </div>
          <div>
            <i className="fas fa-pause-circle text-white text-2xl"></i>
          </div>
          <div className="ml-5">
            <i className="fas fa-step-forward text-gray-300 text-xs"></i>
          </div>
          <div className="ml-7">
            <i className="fas fa-undo text-green-600 text-xs"></i>
          </div>
        </div>
        <div className="flex items-center justify-around text-mini text-white font-body">
          <p className="text-gray-300">2:48</p>
          <div className="flex ml-2 mr-2">
            <div className="bg-white h-0.5 w-80"></div>
            <div className="bg-gray-600 h-0.5 w-16"></div>
          </div>
          <p className="text-gray-300">3:06</p>
        </div>
      </div>
      <div className="mr-3 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-green-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mr-2 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mr-2"
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
        <div className="flex items-center">
          <div className="bg-white h-0.5 w-14"></div>
          <div className="bg-gray-600 h-0.5 w-4"></div>
          <i className="ml-2 text-xs fas fa-compress-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Player;
