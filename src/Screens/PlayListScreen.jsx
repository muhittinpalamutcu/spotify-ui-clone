import React from "react";

const PlayListScreen = () => {
  return (
    <div className="bg-black bg-opacity-10 bg-gradient-to-b from-yellow-500 via-transparent to-transparent h-full">
      <div className="bg-yellow-500 bg-opacity-90 h-56 flex items-center">
        <div className="ml-5 mt-5 flex">
          <img
            className="w-44 h-44 shadow-2xl "
            src="/images/lofibeats.jpeg"
            alt="playlist-img"
          />
          <div className="text-body ml-4">
            <p className="text-gray-200 text-mini uppercase mt-10">Playlist</p>
            <p className="text-6xl font-extrabold text-gray-200">lofi beats</p>
            <p className="text-mini text-gray-200 mt-3">
              Beats to relax, study, and focus...
            </p>
            <div className="flex items-center">
              <div>
                <i className="fab fa-spotify text-green-500 bg-black rounded-full"></i>
              </div>
              <p className="ml-1 font-body text-white text-tiny font-medium">
                Spotify ·
              </p>
              <p className="text-mini font-body text-gray-200 ml-1">
                {" "}
                4,174,874 likes · 600 songs, 22 hr 41 min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-5 flex items-center">
        <div className="w-10 h-10 rounded-full bg-green-600 flex justify-center items-center">
          <i class="fas fa-play text-white"></i>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-green-600 ml-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <div className="ml-5 h-5 w-5 border-gray-400 border rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <div>
          {" "}
          <p className="text-white text-xl ml-5">···</p>
        </div>
      </div>
      <div className="p-5">
        {" "}
        <table className="table-auto text-gray-400 text-mini font-body">
          <thead>
            <tr className="text-left border-b border-gray-800">
              <th className="1/12">#</th>
              <th className="w-5/12 pl-5">TITLE</th>
              <th className="w-3/12 ...">ALBUM</th>
              <th className="w-2/12 ...">DATE ADDED</th>
              <th className="w-2/12 text-right pr-10">
                <i className="far fa-clock text-xs"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-12">
              <td className="text-midi">1</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song1.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    Lonely in London
                  </p>
                  <p>Slumberville</p>
                </div>
              </td>
              <td className="text-xs"> Lonely in London</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">2:15</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">2</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song2.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">Roots</p>
                  <p>Kupla</p>
                </div>
              </td>
              <td className="text-xs">Kingdom in Blue</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">2:19</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">3</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song3.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    Unfolding
                  </p>
                  <p>Hakaisu</p>
                </div>
              </td>
              <td className="text-xs">Unfolding</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">1:52</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">4</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song4.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    I Thought it would be Different this Time
                  </p>
                  <p>Fdiuxx</p>
                </div>
              </td>
              <td className="text-xs">
                {" "}
                I Thought it would be Different this Time
              </td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">2:41</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">5</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song5.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    it was love
                  </p>
                  <p>nrg, Pueblo Vista</p>
                </div>
              </td>
              <td className="text-xs"> it was love</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">2:22</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">6</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song6.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    Tiger Park
                  </p>
                  <p>Lo'fi Boy, BVG</p>
                </div>
              </td>
              <td className="text-xs">Tiger Park</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">3:06</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">7</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song7.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">
                    sleep static
                  </p>
                  <p>luvwn</p>
                </div>
              </td>
              <td className="text-xs">sleep static</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">1:38</td>
            </tr>
            <tr className="h-12">
              <td className="text-midi">8</td>
              <td className="ml-5 h-12 flex items-center">
                <img
                  className="w-6 h-6"
                  src="/images/song8.jpeg"
                  alt="song-img"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-200 font-semibold">Tracy</p>
                  <p>Pontiac Puma</p>
                </div>
              </td>
              <td className="text-xs">Tracy</td>
              <td className="text-xs"> 9 days ago</td>
              <td className="text-xs text-right pr-10">2:03</td>
            </tr>
          </tbody>
        </table>
        <p className="uppercase text-xs text-gray-200 font-body font-semibold text-right mr-2 cursor-pointer mt-5">
          FIND MORE
        </p>
      </div>
      <div className="font-body ml-5">
        <p className="text-white font-semibold text-md">Recommended</p>
        <p className="text-xs text-gray-300">
          Based on what's in this playlist
        </p>
      </div>
    </div>
  );
};

export default PlayListScreen;
