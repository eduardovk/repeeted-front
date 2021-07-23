import React from 'react';
import "./style.css";

function ArtistCards() {

    return (
        <>
            <h3>Artistas relacionados</h3>
            <div className="artist-cards-container">
                <div className="artist-card"><img src="https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg" />
                    <div className="card-title">Drake</div>
                </div>
                <div className="artist-card"><img src="https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png" />
                    <div className="card-title">Eminem</div>
                </div>
                <div className="artist-card"><img src="https://images.genius.com/ff12f8b733e024adf005ff2a4aff4a07.639x639x1.jpg" />
                    <div className="card-title">Kanye West</div>
                </div>
                <div className="artist-card"><img src="https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg" />
                    <div className="card-title">Kendrick Lamar</div>
                </div>
                <div className="artist-card"><img src="https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png" />
                    <div className="card-title">The Weeknd</div>
                </div>
                <div className="artist-card"><img src="https://images.genius.com/5ff67a7842c056be139b272de8f8bd83.1000x1000x1.jpg" />
                    <div className="card-title">Thirty Seconds to Mars Thirty Seconds to Mars</div>
                </div>
            </div>
        </>
    );
}

export default ArtistCards;