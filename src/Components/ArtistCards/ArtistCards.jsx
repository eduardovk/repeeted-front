import React, { useState } from 'react';
import "./style.css";
import Loading from '../../images/loading.svg';

function ArtistCards(props) {

    const ArtistCard = (props) => {
        return (
            <div className="artist-card"><div className="card-white"></div><img src={props.img} />
                <div className="card-title">{props.name}</div>
            </div>
        );
    }

    return (
        <>
            <h2>{props.title}</h2>
            <div className="artist-cards-container ">
                {props.loading ? (
                    <div id="loading-box">
                        <img src={Loading} />
                    </div>
                ) : (<>
                    {props.artists ? (
                        <>
                            {props.artists.map(artist => (
                                <ArtistCard name={artist.name} img={artist.img} />
                            ))}
                        </>
                    ) : (<h2 id="no-result">Nenhum resultado encontrado.</h2>)}</>)}
                {/* <ArtistCard name="Drake" img="https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg" />
                <ArtistCard name="Eminem" img="https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png" />
                <ArtistCard name="Kanye West" img="https://images.genius.com/ff12f8b733e024adf005ff2a4aff4a07.639x639x1.jpg" />
                <ArtistCard name="Kendrick Lamar" img="https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg" />
                <ArtistCard name="The Weeknd" img="https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png" />
                <ArtistCard name="Thirty Seconds to Mars" img="https://images.genius.com/5ff67a7842c056be139b272de8f8bd83.1000x1000x1.jpg" /> */}
            </div>
        </>
    );
}

export default ArtistCards;