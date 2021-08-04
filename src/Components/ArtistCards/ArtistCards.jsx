import React, { useState } from 'react';
import "./style.css";
import Loading from '../../images/loading.svg';
import { Link } from "react-router-dom";

function ArtistCards(props) {

    const ArtistCard = (props) => {
        return (
            <div className="artist-card">
                <Link to={"/" + props.slug} onClick={() => { scrollToTop() }}>
                    <div className="card-white"></div>
                    <img src={props.img} />
                    <div className="card-title">{props.name}</div>
                </Link>
            </div>
        );
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
                    ) : (<h2 id="no-result">Nenhum resultado encontrado.</h2>)}</>)}
            </div>
        </>
    );
}

export default ArtistCards;