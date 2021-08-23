import React, {useContext} from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import "./style.css";
import 'animate.css';
import { i18n } from '../../translate/i18n';

function ArtistInfo({ artist, total_songs, total_words }) {

    const {lang} = useContext(GlobalContext);

    return (
        <div className="artist-container shadow animate__animated animate__fadeInLeft">
            <div className="artist-image">
                <img className="image-cover" src={artist.cover} />
            </div>
            <div className="artist-info">
                <div className="artist-header">
                    <div className="artist-title">{artist.name}</div>
                </div>
                <div className="artist-footer">
                    <div className="songs-analyzed">
                        <span><span className="a-total">{total_songs}</span>{i18n.t('words.analyzedSongs')}</span>
                    </div>
                    <div className="words-analyzed">
                        <span><span className="a-total">{total_words.toLocaleString(lang)}</span>{i18n.t('words.analyzedWords')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;
