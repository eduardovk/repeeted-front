import React from 'react';
import "./style.css";

function ArtistInfo() {
    return (
        <div className="artist-container">
            <div className="artist-image">
                <div className="image-cover"></div>
            </div>
            <div className="artist-info">
                <div className="artist-header">
                    <div className="artist-title">Thirty Seconds to Mars</div>
                </div>
                <div className="artist-footer">
                    <div className="songs-analyzed">Músicas analisadas: 999</div>
                    <div className="words-analyzed">Palavras analisadas: 999999</div>
                    <div className="like-share">Like  Share</div>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;
