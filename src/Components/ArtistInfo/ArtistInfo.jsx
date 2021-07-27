import React from 'react';
import "./style.css";
import 'animate.css';

function ArtistInfo() {
    return (
        <div className="artist-container shadow animate__animated animate__fadeInLeft">
            <div className="artist-image">
                <img className="image-cover" src="https://images.genius.com/5ff67a7842c056be139b272de8f8bd83.1000x1000x1.jpg" />
            </div>
            <div className="artist-info">
                <div className="artist-header">
                    <div className="artist-title">Thirty Seconds to Mars</div>
                </div>
                <div className="artist-footer">
                    <div className="songs-analyzed">
                        <span><span className="a-total">999</span>Músicas analisadas</span>
                    </div>
                    <div className="words-analyzed">
                        <span><span className="a-total">999999</span>Palavras analisadas</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;
