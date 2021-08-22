import React, { useState } from 'react';
import "./style.css";
import Loading from '../../images/loading.svg';
import Blank from '../../images/blank.png';
import { Link } from "react-router-dom";
import { i18n } from '../../translate/i18n';

function ArtistCards(props) {

    const ArtistCard = (props) => {
        return (
            <div className="artist-card">
                <Link to={"/" + props.slug}>
                    <div className="artist-bg" style={{ backgroundImage: "url(" + props.img + ")", backgroundSize: "cover" }}></div>
                    <div className="card-white"></div>
                    <img src={Blank} />
                    <div className="card-title">{props.name}</div>
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
                        <img src={Loading} />
                    </div>
                ) : (<>
                    {props.artists && props.artists.length > 0 ? (
                        <>
                            {props.artists.map((artist, idx) => (
                                <ArtistCard key={idx} name={artist.name} img={artist.cover} slug={artist.slug} />
                            ))}
                        </>
                    ) : (<h2 id="no-result">{i18n.t('artistCard.noResults')}</h2>)}</>)}
            </div>
        </>
    );
}

export default ArtistCards;