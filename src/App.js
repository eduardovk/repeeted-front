import React from 'react';
import './App.css';
import ArtistInfo from './Components/ArtistInfo';
import WordCloud from './Components/WordCloud';
import Tags from './Components/Tags';
import Accordion from './Components/Accordion';
import ArtistCards from './Components/ArtistCards';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="container">
          <ArtistInfo />
          <WordCloud />
          <Tags />
          <Accordion />
          <ArtistCards />
        </div>
      </div>
    </div>
  );
}

export default App;
