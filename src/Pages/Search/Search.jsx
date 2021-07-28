import React from "react";
import "./style.css";
import "animate.css";
import ArtistCards from '../../Components/ArtistCards/ArtistCards';

function Search() {

    return (
        <div className="container">
            <h3 id="searching-for">Pesquisando por termo 'drake'...</h3>
            <ArtistCards title="Resultados da pesquisa" />
        </div>
    );
}
export default Search;