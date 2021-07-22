import React from 'react';
import './App.css';
import ArtistInfo from './Components/ArtistInfo';
import WordCloud from './Components/WordCloud';
import Tags from './Components/Tags'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ArtistInfo />
        <WordCloud />
        <Tags />
      </div>
    </div>
  );
}

export default App;
