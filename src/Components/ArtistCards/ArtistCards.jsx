import React, { useContext } from 'react';
import "./style.css";
import Loading from '../../images/loading.svg';
import Blank from '../../images/blank.png';
import { Link } from "react-router-dom";
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { generateImgURL } from '../../Helpers';

function ArtistCards(props) {

    const { lang } = useContext(GlobalContext);

    const ArtistCard = ({ artist }) => {
        return (
            <div className="artist-card">
                <Link to={"/" + artist.slug}>
                    <div className="artist-bg" style={{ backgroundImage: "url(" + generateImgURL(artist, lang) + ")", backgroundSize: "cover" }}></div>
                    <div className="card-white"></div>
                    <img src={Blank} alt={artist.name} />
                    <div className="card-title">{artist.name}</div>
                </Link>
            </div>
        );
    }

    return (
        <>
            <h2>{props.title}</h2>
            <div className="artist-cards-container ">
                {props.loading ? (
                    <div id="loading-box">
                        <img src={Loading} alt={i18n.t('words.loadingPage')} />
                    </div>
                ) : (<>
                    {props.artists && props.artists.length > 0 ? (
                        <>
                            {props.artists.map((artist, idx) => (
                                <ArtistCard key={idx} artist={artist} />
                            ))}
                        </>
                    ) : (<h2 id="no-result">{i18n.t('artistCard.noResults')}</h2>)}</>)}
            </div>
        </>
    );
}

export default ArtistCards;