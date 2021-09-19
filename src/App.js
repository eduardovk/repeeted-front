import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import BackToTop from './Components/BackToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Words from './Pages/Words/Words';
import Search from './Pages/Search/Search';
import Genres from './Pages/Genres/Genres';
import GenreArtists from './Pages/GenreArtists/GenreArtists';
import NameList from './Pages/NameList/NameList';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import About from './Pages/About/About';
import { GlobalContext } from './Contexts/GlobalContext';
import ReactGa from 'react-ga';

function App() {

  const I18N_STORAGE_KEY = 'i18nextLng';
  const [lang] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const S3URL = lang === 'pt-BR' ? process.env.REACT_APP_S3_SA_URL : process.env.REACT_APP_S3_US_URL;

  const websiteName = process.env.REACT_APP_WEBSITE_NAME;
  const apiURL = process.env.REACT_APP_API_URL;

  function changeLang() {
    let currentLang = localStorage.getItem(I18N_STORAGE_KEY);
    localStorage.setItem(I18N_STORAGE_KEY, (currentLang === 'pt-BR' ? 'en-US' : 'pt-BR'));
    window.location = window.location.href;
  }

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_ANALYTICS_KEY);
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${S3URL}background.jpg)` }}>
      <Router>
        <GlobalContext.Provider value={{ lang: lang, websiteName: websiteName, apiURL: apiURL }}>
          <NavBar changeLang={changeLang} />
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
                exact path='/letters/:letter/:page?'
                render={(props) => (
                  <NameList {...props} key={Math.random()} />
                )} />
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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/how-it-works">
                <HowItWorks />
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
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
