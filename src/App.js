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
import Genres from './Pages/Genres/Genres';
import { AiOutlineToTop } from 'react-icons/ai';
import GenreArtists from './Pages/GenreArtists/GenreArtists';

function App() {

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
            <Route path="/genres/">
              <Genres />
            </Route>
            <Route
              exact path='/genre/:slug/:page?'
              render={(props) => (
                <GenreArtists {...props} key={Math.random()} />
              )} />
            <Route path="/search/:term">
              <Search />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route
              exact path='/:slug'
              render={(props) => (
                <Words {...props} key={Math.random()} />
              )} />
          </Switch>
        </div>
        <BackToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
