import React from 'react';
import './App.css';
import ArtistInfo from './Components/ArtistInfo';
import WordCloud from './Components/WordCloud';
import Tags from './Components/Tags';
import Accordion from './Components/Accordion';
import ArtistCards from './Components/ArtistCards';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ArtistInfo />
        <WordCloud />
        <Tags />
        <Accordion />
        <ArtistCards />
      </div>
    </div>
  );
}

export default App;
