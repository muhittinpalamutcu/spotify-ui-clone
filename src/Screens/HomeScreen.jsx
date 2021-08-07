import React from "react";

const HomeScreen = () => {
  return (
    <div className="pr-52">
      <p className="text-white font-body font-semibold text-xl ml-5">
        Good morning
      </p>
      <div className="grid grid-cols-12 gap-x-10 gap-y-3 ml-5 mt-5">
        <div className="playlist-card">
          <img src="/images/card3.png" alt="playlist-img" />
          <p className="playlist-text">Top Songs - USA</p>
        </div>
        <div className="playlist-card">
          <img src="/images/card1.png" alt="playlist-img" />
          <p className="playlist-text">CASTLES II</p>
        </div>
        <div className="playlist-card">
          <img src="/images/card3.png" alt="playlist-img" />
          <p className="playlist-text">Top Songs - USA</p>
        </div>
        <div className="playlist-card">
          <img src="/images/card2.png" alt="playlist-img" />
          <p className="playlist-text">.</p>
        </div>
        <div className="playlist-card">
          <img src="/images/card10.png" alt="playlist-img" />
          <p className="playlist-text">Mui</p>
        </div>
        <div className="playlist-card">
          <img src="/images/card12.png" alt="playlist-img" />
          <p className="playlist-text">#</p>
        </div>
        <div className="playlist-card">
          <div className="flex justify-center items-center bg-gradient-to-br from-indigo-800 via-indigo-500 to-white w-14 h-full rounded-l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          <p className="playlist-text">Liked Songs</p>
        </div>
      </div>
      <div className="mt-5 ml-5">
        <p className="text-white font-body font-semibold">Made for Mui</p>
        <p className="text-xs text-gray-400">
          Get better recommendations the more you listen.
        </p>
        <div className="text-xs mt-6 ml-1 flex gap-5 overflow-x-auto ">
          <div className="flex-shrink-0  bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card11.png" alt="card-img" />
            <p className="text-white mt-3"> Release Radar</p>
            <p className="text-gray-300">
              Catch all the latest music from artists you follow...
            </p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card13.png" alt="card-img" />
            <p className="text-white mt-3"> Daily Mix 1</p>
            <p className="text-gray-300">
              Catch all the latest music from artists you follow...
            </p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card9.png" alt="card-img" />
            <p className="text-white mt-3"> Daily Mix 2</p>
            <p className="text-gray-300">
              Catch all the latest music from artists you follow...
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-5">
        <p className="text-white font-body font-semibold">
          More of what you like
        </p>
        <p className="text-xs text-gray-400">
          Hear a little bit of everything you love.
        </p>
        <div className="text-xs mt-6 ml-1 flex gap-5 overflow-x-auto">
          <div className="flex-shrink-0 bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card16.png" alt="card-img" />
            <p className="text-white mt-3">tear drop</p>
            <p className="text-gray-300">new music by MASN</p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card17.png" alt="card-img" />
            <p className="text-white mt-3"> Mega Hit Mix</p>
            <p className="text-gray-300">
              A mega mix 75 favorites from the last...
            </p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 w-40 bg-opacity-10 p-3 hover:bg-gray-500 hover:bg-opacity-20">
            <img src="/images/card18.png" alt="card-img" />
            <p className="text-white mt-3">Sad Bops</p>
            <p className="text-gray-300">For all of us dancing on our own.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-5">
        <p className="text-white font-body font-semibold">
          Your favorite artists
        </p>
        <div className="flex mt-5 gap-5 overflow-x-auto ml-1">
          <div className=" bg-gray-600 bg-opacity-10 w-40 flex-none font-body p-5 hover:bg-gray-500 hover:bg-opacity-20">
            <img
              className="w-28  rounded-full"
              src="/images/LilPeep.jpg"
              alt="artist-img"
            />
            <p className="text-white text-tiny font-semibold mt-3">Lil Peep</p>
            <p className="text-gray-400 text-xs mt-1">Artist</p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 bg-opacity-10  w-40 font-body p-5 hover:bg-gray-500 hover:bg-opacity-20">
            <img
              className="w-28  rounded-full"
              src="/images/Brennan.png"
              alt="artist-img"
            />
            <p className="text-white text-tiny font-semibold mt-3">
              Brennan Savage
            </p>
            <p className="text-gray-400 text-xs mt-1">Artist</p>
          </div>
          <div className="flex-shrink-0 bg-gray-600 bg-opacity-10 w-40 flex-none font-body p-5 hover:bg-gray-500 hover:bg-opacity-20">
            <img
              className="w-28 h-28 object-cover rounded-full"
              src="/images/Mgk.jpg"
              alt="artist-img"
            />
            <p className="text-white text-tiny font-semibold mt-3">
              Machine Gun Kelly
            </p>
            <p className="text-gray-400 text-xs mt-1">Artist</p>
          </div>
        </div>
      </div>

      <div className="h-30 mb-20"></div>
    </div>
  );
};

export default HomeScreen;
