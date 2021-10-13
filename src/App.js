import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import BackToTop from './Components/BackToTop';
import {
  Router,
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
import ReactGA from 'react-ga';
import { Modal } from 'react-responsive-modal';
import { i18n } from './translate/i18n'
import { RiCloseLine } from 'react-icons/ri';
import PaypalButton from './Components/PaypalButton/PaypalButton';

ReactGA.initialize(process.env.REACT_APP_ANALYTICS_KEY);
const history = require("history").createBrowserHistory();
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function App() {

  const I18N_STORAGE_KEY = 'i18nextLng';
  const [lang] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const S3URL = lang === 'pt-BR' ? process.env.REACT_APP_S3_SA_URL : process.env.REACT_APP_S3_US_URL;
  const [openMainModal, setOpenMainModal] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    if (localStorage.getItem('closedMainModal') !== 'true') {
      if (process.env.REACT_APP_MAIN_MODAL === "true") setOpenMainModal(true);
    }
  }, [])

  function closeMainModal() {
    console.log('fechou');
    localStorage.setItem('closedMainModal', 'true');
    setOpenMainModal(false);
  }

  const closeIcon = (
    <span style={{ color: "white" }}><RiCloseLine size={30} /></span>
  );

  const websiteName = process.env.REACT_APP_WEBSITE_NAME;
  const apiURL = process.env.REACT_APP_API_URL;
  const wordsFilter = process.env.REACT_APP_WORDS_FILTER.split(',');
  const showAds = process.env.REACT_APP_SHOW_ADS;

  function changeLang() {
    let currentLang = localStorage.getItem(I18N_STORAGE_KEY);
    localStorage.setItem(I18N_STORAGE_KEY, (currentLang === 'pt-BR' ? 'en-US' : 'pt-BR'));
    window.location = window.location.href;
  }


  return (
    <div className="App" style={{ backgroundImage: `url(${S3URL}background.jpg)` }}>
      <Router history={history}>
        <GlobalContext.Provider value={{ lang: lang, websiteName: websiteName, apiURL: apiURL, wordsFilter: wordsFilter, showAds: showAds }}>
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

            <Modal open={openMainModal} onClose={closeMainModal} center classNames={{
              modal: 'customModal-donate',
            }} closeIcon={closeIcon}>
              <div id="modal-donate-body">
                <h1 style={{ textAlign: "center" }}>OMG!</h1>
                <div id="modal-donate">
                  <div id="donate-text">
                    <span style={{ fontSize: "1em" }}><b style={{ color: '#61e3a5' }}>{i18n.t('mainModal.goodNews')}</b>
                      {i18n.t('mainModal.text1')}<b>{i18n.t('mainModal.improvements')}</b>{i18n.t('mainModal.text2')}</span><br />
                    <span style={{ fontSize: "1em" }}><b style={{ color: '#ff733d' }}>{i18n.t('mainModal.badNews')}</b>{i18n.t('mainModal.text3')}</span><br />
                  </div>
                  <div id="donate-section">
                    <span>{i18n.t('donateModal.donate1')} <b><span style={{ color: "#ffc145" }}>{i18n.t('words.donation')}</span></b> {i18n.t('donateModal.donate2')}</span>
                    <PaypalButton />
                    <span style={{ fontSize: ".8em" }}>{i18n.t('donateModal.donate3')}
                      &nbsp;<span style={{ color: '#0a62d0' }}><b><i>Paypal</i></b></span></span><br />
                    <br /><span><b>{i18n.t('words.thankYou')}</b></span>
                  </div>
                </div>
              </div>
            </Modal>

          </div>
          <BackToTop />
          <Footer />
        </GlobalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
