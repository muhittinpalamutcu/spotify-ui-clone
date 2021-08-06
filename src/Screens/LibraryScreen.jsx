import React, { useState } from "react";

const LibraryScreen = () => {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <p className="text-white font-body font-semibold text-md ml-5 mt-3">
        Playlists
      </p>
      <div className="flex ml-5 mt-3 gap-8 flex-wrap">
        <div
          className="flex-shrink-0 bg-gradient-to-br from-indigo-700 via-indigo-500 to-indigo-200 w-72 h-48 rounded-sm"
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
        >
          <div className="flex flex-col w-full h-28 justify-center items-center">
            <div className="flex-shrink-0">
              {" "}
              <p className="text-midi text-white font-body font-extralight block">
                <span className="font-light">Becky Hill</span> Last Time
                <span className="font-light"> · Dennis Lloyd </span> The Way ·
              </p>
              <p className="text-midi text-white font-body font-extralight block">
                <span className="font-light">Bebe Rexha</span> Sacrifice
                <span className="font-light"> · Joel Corry </span> BED{" "}
                <span className="font-light"> · Zoe</span>
              </p>
              <p className="text-midi text-white font-body font-extralight block">
                <span className="font-light">Wees</span> Hold Me Like You Used
                to
                <span className="font-light"> · Alan Walker... </span>
              </p>
            </div>
          </div>
          <div className="px-4 flex-shrink-0">
            <p className="text-gray-200 font-body text-lg font-semibold">
              Liked Songs
            </p>
            <p className="text-gray-300 font-body text-xs">57 liked songs</p>
          </div>
          {play && (
            <div className="flex justify-end mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist3.png" alt="playlist-img" />
            <p className="library-card-name">lofi beats</p>
            <p className="library-card-description">By Spotify</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist2.png" alt="playlist-img" />
            <p className="library-card-name">blues</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist4.png" alt="playlist-img" />
            <p className="library-card-name">Honey</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist5.png" alt="playlist-img" />
            <p className="library-card-name">Debug 🐥</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist6.png" alt="playlist-img" />
            <p className="library-card-name">New Page</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist7.png" alt="playlist-img" />
            <p className="library-card-name">Top Songs-USA</p>
            <p className="library-card-description">By Spotify</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist8.png" alt="playlist-img" />
            <p className="library-card-name">#</p>
            <p className="library-card-description">By Buse</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist9.png" alt="playlist-img" />
            <p className="library-card-name">Mui</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist10.png" alt="playlist-img" />
            <p className="library-card-name">Savage</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
        <div className="library-card">
          <div className="flex flex-col justify-center">
            <img src="/images/playlist11.png" alt="playlist-img" />
            <p className="library-card-name">Coding</p>
            <p className="library-card-description">By Muhittin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryScreen;
