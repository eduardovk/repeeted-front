import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import BackToTop from './Components/BackToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Words from './Pages/Words/Words';
import Search from './Pages/Search/Search';
import { AiOutlineToTop } from 'react-icons/ai';

function App() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main">
          <SearchBar />
          <Switch>
            <Route
              exact path='/'
              render={(props) => (
                <Home {...props} key={Math.random()} />
              )}
            />
            <Route path="/words">
              <Words />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
        <BackToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
