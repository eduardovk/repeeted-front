import React from "react";
import ArtistInfo from '../../Components/ArtistInfo';
import WordCloud from '../../Components/WordCloud';
import Tags from '../../Components/Tags';
import Accordion from '../../Components/Accordion';
import ArtistCards from '../../Components/ArtistCards';

function Words() {
    return (
        <div className="container">
            <ArtistInfo />
            <h2>Palavras mais repetidas por Thirty Seconds to Mars</h2>
            <div className="shadow animate__animated animate__backInUp">
                <WordCloud />
                <Tags />
                <Accordion />
            </div>
            <ArtistCards title="Artistas relacionados" />
        </div>
    );
}
export default Words;