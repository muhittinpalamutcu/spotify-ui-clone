import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import Sidebar from "./Components/Sidebar";
import ActivityBar from "./Components/ActivityBar";
import Header from "./Components/Header";
import Player from "./Components/Player";
import LibraryScreen from "./Screens/LibraryScreen";
import PlayListScreen from "./Screens/PlayListScreen";

const App = () => {
  return (
    <Router>
      <main
        className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-3 bg-black bg-opacity-90"
        style={{ height: "92vh" }}
      >
        <div className="lg:col-span-1 md:col-span-2 sm:grid-cols-1 sm:h-full h-14  bg-black text-white">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 md:col-span-8 sm:grid-cols-1 sm:h-full h-96 overflow-x-auto">
          <Header />
          <Route path="/search" component={SearchScreen} />
          <Route path="/library" component={LibraryScreen} />
          <Route path="/playlist/:name" component={PlayListScreen} />
          <Route path="/" component={HomeScreen} exact />
        </div>
        <div className="lg:col-span-2 md:col-span-2 sm:grid-cols-1 sm:h-full h-14 bg-black text-white resize-x overflow-auto min-w-min">
          <ActivityBar />
        </div>
      </main>
      <div
        className="col-span-12 bg-black bg-opacity-90"
        style={{ height: "8vh" }}
      >
        <Player />
      </div>
    </Router>
  );
};

export default App;
