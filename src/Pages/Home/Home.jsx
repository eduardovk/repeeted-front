import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../../Contexts/GlobalContext';
import "./style.css";
import "animate.css";
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';

function Home() {

    const { lang } = useContext(GlobalContext);
    const [fieldTerm, setFieldTerm] = useState("");
    const S3URL = lang === 'pt-BR' ? process.env.REACT_APP_S3_SA_URL : process.env.REACT_APP_S3_US_URL;
    const total = {
        words: parseInt(process.env.REACT_APP_TOTAL_WORDS),
        artists: parseInt(process.env.REACT_APP_TOTAL_ARTISTS),
        songs: parseInt(process.env.REACT_APP_TOTAL_SONGS)
    };
    Object.keys(total).map(n => { total[n] = total[n].toLocaleString(lang); return n; });

    const artists = [
        { name: 'Drake', id: 1, slug: "drake", on_s3: 1 },
        { name: 'Eminem', id: 2, slug: "eminem", on_s3: 1 },
        { name: 'Billie Eilish', id: 23, slug: "billie-eilish", on_s3: 1 },
        { name: 'Lana Del Rey', id: 163, slug: "lana-del-rey", on_s3: 1 },
        { name: 'The Weeknd', id: 5, slug: "the-weeknd", on_s3: 1 },
        { name: 'Pink Floyd', id: 100, slug: "pink-floyd", on_s3: 1 },
        { name: 'The Beatles', id: 202, slug: "the-beatles", on_s3: 1 },
        { name: 'Ed Sheeran', id: 15, slug: "ed-sheeran", on_s3: 1 },
        { name: 'Gorillaz', id: 103, slug: "gorillaz", on_s3: 1 },
        { name: 'Halsey', id: 55, slug: "halsey", on_s3: 1 },
        { name: 'The Strokes', id: 224, slug: "the-strokes", on_s3: 1 },
        { name: 'Black Eyed Peas', id: 349, slug: "black-eyed-peas", on_s3: 1 },
        { name: 'Fetty Wap', id: 50, slug: "fetty-wap", on_s3: 1 },
        { name: 'Ariana Grande', id: 9, slug: "ariana-grande", on_s3: 1 },
        { name: 'Coldplay', id: 101, slug: "coldplay", on_s3: 1 }
    ]

    useEffect(() => { scrollToTop() }, []);

    function setFieldSearchTerm(term) {
        setFieldTerm(term.trim());
    }

    function submitFieldSearch() {
        document.getElementById('field-search-form').submit();
    }

    const ExampleArtist = (props) => {
        return (
            <div className="example-artist">
                <Link to={"/" + props.slug}>
                    <div className="example-white"></div>
                    <img src={S3URL+props.img} alt={props.name} loading="lazy" />
                    <div className="example-footer">{i18n.t('home.seeMore')}&nbsp;</div>
                </Link>
            </div>
        );
    }

    return (
        <div id="homepage-container">
            <div id="numbers-info" style={{backgroundImage: `url(${S3URL}mic-pattern.jpg)`}}>
                <h1>{i18n.t('home.discover')}</h1>
                <div id="total-words">
                    <h2 className="animate__animated animate__flipInX">{total.words}</h2>
                    <h3>{i18n.t('words.analyzedWords').toUpperCase()}</h3>
                </div>
                <div className="amounts-info">
                    <div>
                        <h2 className="animate__animated animate__flipInX">{total.artists}</h2>
                        <h3>{i18n.t('words.analyzedArtists').toUpperCase()}</h3>
                    </div>
                    <div>
                        <h2 className="animate__animated animate__flipInX">{total.songs}</h2>
                        <h3>{i18n.t('words.analyzedSongs').toUpperCase()}</h3>
                    </div>
                </div>
            </div>
            <div id="examples-artists">
                <ExampleArtist img="example-rush.jpg" slug="rush" name="Rush" />
                <ExampleArtist img="example-cannibal-corpse.jpg" slug="cannibal-corpse" name="Cannibal Corpse" />
                <ExampleArtist img="example-cardi-b.jpg" slug="cardi-b" name="Cardi B" />
            </div>
            <div className="container">
                <form id="field-search-form" action={"/search/" + fieldTerm}>
                    <div id="home-search">
                        <input id="home-input" type="text" placeholder={i18n.t('buttons.searchBar')}
                            onChange={(event) => { setFieldSearchTerm(event.target.value); }} />
                        <span><FaSearch id="search-btn" size={22} onClick={() => { submitFieldSearch() }} /></span>
                    </div>
                </form >
                <ArtistCards title={i18n.t('home.popular')} loading={false} artists={artists} />
            </div>
        </div>

    );
}
export default Home;