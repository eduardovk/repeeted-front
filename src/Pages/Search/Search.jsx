import React from "react";
import "./style.css";
import "animate.css";
import ArtistCards from '../../Components/ArtistCards/ArtistCards';

function Search() {

    const artists = [
        { name: 'Drake', img: 'https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg' },
        { name: 'Eminem', img: 'https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png' },
        { name: 'Kanye West', img: 'https://images.genius.com/ff12f8b733e024adf005ff2a4aff4a07.639x639x1.jpg' },
        { name: 'Kendrick Lamar', img: 'https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg' },
        { name: 'The Weeknd', img: 'https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png' },
        { name: 'Thirty Seconds to Mars', img: 'https://images.genius.com/5ff67a7842c056be139b272de8f8bd83.1000x1000x1.jpg' }
    ]

    return (
        <div className="container">
            <h3 id="searching-for">Pesquisando por termo 'drake'...</h3>
            <ArtistCards title="Resultados da pesquisa" loading={true} artists={artists}/>
        </div>
    );
}
export default Search;