import React from "react";

const SearchScreen = () => {
  return (
    <div>
      <p className="text-white font-body font-semibold text-sm ml-5">
        Recent searches
      </p>
      <div className="flex ml-5 mt-3 gap-3">
        <div className="searches-card">
          <img
            className="w-32 h-28"
            src="./images/recent1.jpeg"
            alt="recent-img"
          />
          <p className="searched-description">STAY(with Justin ...</p>
          <p className="searched-artist">The Kid LAROI, Justin Bieber</p>
        </div>
        <div className="searches-card">
          <img
            className="w-32 h-28"
            src="./images/recent2.jpeg"
            alt="recent-img"
          />
          <p className="searched-description">Hands To Myself</p>
          <p className="searched-artist">Selena Gomez</p>
        </div>
        <div className="searches-card">
          <img
            className="w-32 h-28"
            src="./images/recent3.jpeg"
            alt="recent-img"
          />
          <p className="searched-description">Arcade</p>
          <p className="searched-artist">Duncan Laurence</p>
        </div>
        <div className="searches-card">
          <img
            className="w-32 h-28"
            src="./images/recent4.jpeg"
            alt="recent-img"
          />
          <p className="searched-description">One Way(feat T-Pai..</p>
          <p className="text-mini text-gray-400">6LACK, T-Pain</p>
        </div>
        <div className="searches-card">
          <img
            className="w-32 h-28"
            src="./images/recent5.jpeg"
            alt="recent-img"
          />
          <p className="searched-description">Emily In Paris Netfl..</p>
          <p className="searched-artist">By Retro Tones</p>
        </div>
      </div>
      <div className="ml-5 mt-5">
        <p className="text-white font-body font-semibold text-sm">
          Your top genres
        </p>
        <div className="overflow-hidden">
          <div className="mt-2 flex gap-3 w-full overflow-x-scroll overflow-y-hidden genres-horizontal-area">
            <div className="w-72 h-40 bg-yellow-700 rounded-lg relative overflow-hidden flex-shrink-0 inline-block cursor-pointer">
              <p className="ml-2 pt-2 text-2xl text-white font-extrabold font-body">
                Hip Hop
              </p>
              <img
                className=" absolute -bottom-5 right-0 w-20 h-20 transform rotate-35"
                src="./images/genres1.jpeg"
                alt="genres-img"
              />
            </div>
            <div className="w-72 h-40 bg-purple-600 rounded-lg relative overflow-hidden flex-shrink-0 inline-block cursor-pointer">
              <p className="ml-2 pt-2 text-2xl text-white font-extrabold font-body">
                Pop
              </p>
              <img
                className=" absolute -bottom-5 right-0 w-20 h-20 transform rotate-35"
                src="./images/genres2.jpeg"
                alt="genres-img"
              />
            </div>
            <div className="w-72 h-40 bg-pink-600 rounded-lg relative overflow-hidden flex-shrink-0 inline-block cursor-pointer">
              <p className="ml-2 pt-2 text-2xl text-white font-extrabold font-body">
                Dance / Electronic
              </p>
              <img
                className=" absolute -bottom-5 right-0 w-20 h-20 transform rotate-35"
                src="./images/genres3.jpeg"
                alt="genres-img"
              />
            </div>
            <div className="w-72 h-40 bg-red-600 rounded-lg relative overflow-hidden flex-shrink-0 inline-block cursor-pointer">
              <p className="ml-2 pt-2 text-2xl text-white font-extrabold font-body">
                Rock
              </p>
              <img
                className=" absolute -bottom-5 right-0 w-20 h-20 transform rotate-35"
                src="./images/genres4.jpeg"
                alt="genres-img"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white font-body font-semibold text-sm ml-5 mt-3">
        Browse all
      </p>
      <div className="flex flex-wrap w-12/12 gap-4 ml-5 mt-3 mb-5 ">
        <div className="browse-all-card bg-green-600">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Podcasts
          </p>
          <img
            className="browse-all-img"
            src="./images/browse1.jpeg"
            alt="browse-img"
          />
        </div>
        <div className="bg-blue-600 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Made For You
          </p>
          <img
            className="browse-all-img"
            src="./images/browse2.jpeg"
            alt="browse-img"
          />
        </div>
        <div className="bg-purple-600 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">Charts</p>
          <img
            className="browse-all-img"
            src="./images/browse3.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-yellow-600 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            New Releases
          </p>
          <img
            className="browse-all-img"
            src="./images/browse4.jpg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-blue-900 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Discover
          </p>
          <img
            className="browse-all-img"
            src="./images/browse5.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-yellow-300 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Concerts
          </p>
          <img
            className="browse-all-img"
            src="./images/browse6.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-purple-300 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">Summer</p>
          <img
            className="browse-all-img"
            src="./images/browse7.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-green-900 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Happier Than Ever
          </p>
          <img
            className="browse-all-img"
            src="./images/browse8.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-purple-400 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">EQUAL</p>
          <img
            className="browse-all-img"
            src="./images/browse9.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-blue-400 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">Mood</p>
          <img
            className="browse-all-img"
            src="./images/browse10.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-pink-500 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            At Home
          </p>
          <img
            className="browse-all-img"
            src="./images/browse11.jpeg"
            alt="browse-img"
          />
        </div>
        <div className=" bg-yellow-800 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Student
          </p>
          <img
            className="browse-all-img"
            src="./images/browse12.jpeg"
            alt="browse-img"
          />
        </div>
        <div className="bg-green-500 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">
            Decades
          </p>
          <img
            className="browse-all-img"
            src="./images/browse13.jpeg"
            alt="browse-img"
          />
        </div>
        <div className="bg-blue-300 bg-opacity-20 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">Chill</p>
          <img
            className="browse-all-img"
            src="./images/browse14.jpeg"
            alt="browse-img"
          />
        </div>
        <div className="bg-red-600 browse-all-card">
          <p className="text-white font-body font-semibold mt-2 ml-2">Focus</p>
          <img
            className="browse-all-img"
            src="./images/browse15.jpeg"
            alt="browse-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
