import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import RushWords from '../../images/rush.png';
import CannibalCorpseWords from '../../images/cannibal-corpse.png';
import CardiBWords from '../../images/cardi-b.png';
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';

function Home() {

    const I18N_STORAGE_KEY = 'i18nextLng';
    const [fieldTerm, setFieldTerm] = useState("");
    
    const total = {words: 286721199, artists: 22119, songs: 985119};
    Object.keys(total).map(n=>{total[n] = total[n].toLocaleString(localStorage.getItem(I18N_STORAGE_KEY))});

    const artists = [
        { name: 'Drake', slug: "drake", cover: 'https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg' },
        { name: 'Eminem', slug: "eminem", cover: 'https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png' },
        { name: 'Billie Eilish', slug: "billie-eilish", cover: 'https://images.genius.com/1aa6c04aad3652556046bb3aabe96498.900x900x1.jpg' },
        { name: 'Lana Del Rey', slug: "lana-del-rey", cover: 'https://images.genius.com/a90b579f172cd6ff536fc094109179a0.465x465x1.png' },
        { name: 'The Weeknd', slug: "the-weeknd", cover: 'https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png' },
        { name: 'Pink Floyd', slug: "pink-floyd", cover: 'https://images.genius.com/6b5c50912d99c3cf0eabfec5f427c452.1000x1000x1.jpg' },
        { name: 'The Beatles', slug: "the-beatles", cover: 'https://images.genius.com/df75ede64ffcf049727bfbb01d323081.400x400x1.jpg' },
        { name: 'Ed Sheeran', slug: "ed-sheeran", cover: 'https://images.genius.com/b501daeff73d1b17610f47a5668f690a.1000x1000x1.jpg' },
        { name: 'Gorillaz', slug: "gorillaz", cover: 'https://images.genius.com/c9182b5ecce1ab6d22ba0eaddb635424.400x400x1.jpg' },
        { name: 'Halsey', slug: "halsey", cover: 'https://images.genius.com/039d606853bc3c7354475fd74ce630e9.400x400x1.jpg' },
        { name: 'The Strokes', slug: "the-strokes", cover: 'https://images.genius.com/b5237c13de1a05f92ca6327d854cbfc8.1000x1000x1.jpg' },
        { name: 'Black Eyed Peas', slug: "black-eyed-peas", cover: 'https://images.genius.com/67d990fb2d231bf7e3e5c6555cceb379.1000x1000x1.jpg' },
        { name: 'Fetty Wap', slug: "fetty-wap", cover: 'https://images.genius.com/2db490b018326cc845af1b3dbb102cde.834x834x1.jpg' },
        { name: 'Ariana Grande', slug: "ariana-grande", cover: 'https://images.genius.com/d36a47955ac0ddb12748c5e7c2bd4b4b.640x640x1.jpg' },
        { name: 'Coldplay', slug: "coldplay", cover: 'https://images.genius.com/e4f988f1ee26618c5dd41b59b8ff2b43.1000x1000x1.jpg' }
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
                    <img src={props.img} />
                    <div className="example-footer">{i18n.t('home.seeMore')}&nbsp;</div>
                </Link>
            </div>
        );
    }

    return (
        <div id="homepage-container">
            <div id="numbers-info">
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
                <ExampleArtist img={RushWords} slug="rush" />
                <ExampleArtist img={CannibalCorpseWords} slug="cannibal-corpse" />
                <ExampleArtist img={CardiBWords} slug="cardi-b" />
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