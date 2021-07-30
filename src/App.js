import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import Sidebar from "./Components/Sidebar";
import ActivityBar from "./Components/ActivityBar";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <main
            className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-3 bg-black bg-opacity-90"
            style={{ height: "93vh" }}
          >
            <div className="lg:col-span-1 md:col-span-2 sm:grid-cols-1 sm:h-full h-14  bg-black text-white">
              <Sidebar />
            </div>

            <div className="lg:col-span-9 md:col-span-8 sm:grid-cols-1 sm:h-full h-96 overflow-x-auto">
              <Header />
              <Route path="/" component={HomeScreen} exact />
              <Route path="/search" component={SearchScreen} />
              <Route path="/library" />
              <Route path="/playlist/:listname" />
            </div>
            <div className="lg:col-span-2 md:col-span-2 sm:grid-cols-1 sm:h-full h-14 bg-black text-white">
              <ActivityBar />
            </div>
          </main>
          <div className="h-14 col-span-12  ">player</div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
