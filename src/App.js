import React from 'react';
import './App.css';
import ArtistInfo from './Components/ArtistInfo';
import WordCloud from './Components/WordCloud';
import Tags from './Components/Tags';
import Accordion from './Components/Accordion';
import ArtistCards from './Components/ArtistCards';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SearchBar />
        <div className="container">
          <ArtistInfo />
          <WordCloud />
          <Tags />
          <Accordion />
          <ArtistCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
