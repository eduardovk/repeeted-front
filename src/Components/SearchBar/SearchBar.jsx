import React, { useState, useEffect, useContext } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
const axios = require('axios').default;

function SearchBar() {

    const {apiURL} = useContext(GlobalContext);
    const [term, setTerm] = useState("");
    const [moreGenres, setMoreGenres] = useState(false);
    const [genres, setGenres] = useState(null);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    function setSearchTerm(term) {
        setTerm(term.trim());
    }

    function submitSearch() {
        document.getElementById('search-form').submit();
    }

    useEffect(() => {
        const url = `${apiURL}/genres/80`;
        axios.get(url).then(res => {
            setGenres(res.data);
        }).catch(e => console.log(e));
    }, []);

    return (
        <>
            <form id="search-form" action={"/search/" + term}>
                <div className="search-banner">
                    <div className="alphabet">
                        <Link to={`/letters/_`}>#</Link>
                        {letters.map((letter, idx) => (
                            <Link key={idx} to={`/letters/${letter.toLowerCase()}`}>{letter}</Link>
                        ))}
                    </div>
                    <div className="search-container">
                        <div className="input-container">
                            <input type="text" placeholder={i18n.t('buttons.searchBar')}
                                onChange={(event) => { setSearchTerm(event.target.value); }} />
                            <span className="search-icon" onClick={() => { submitSearch() }}>
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                </div>
            </form>
            <div className="fake-bar">
                <div className="genres-container">
                    <div className="main-genres" style={moreGenres ? ({ display: "none" }) : ({ display: "flex" })}>
                        <Link to="/genre/pop"><div className="genre shadow">pop</div></Link>
                        <Link to="/genre/rock"><div className="genre shadow">rock</div></Link>
                        <Link to="/genre/hip-hop"><div className="genre shadow">hip hop</div></Link>
                        <Link to="/genre/country"><div className="genre shadow">country</div></Link>
                        <Link to="/genre/trap"><div className="genre g0 shadow">trap</div></Link>
                        <Link to="/genre/metal"><div className="genre g1 shadow">metal</div></Link>
                        <Link to="/genre/rap"><div className="genre g2 shadow">rap</div></Link>
                        <Link to="/genre/electropop"><div className="genre g3 shadow">electropop</div></Link>
                        <div id="show-genres" onClick={() => { setMoreGenres(true) }}><IoMdArrowDropdown size="1.2em" /></div>
                    </div>
                    <div className="more-genres" style={moreGenres ? ({ display: "flex" }) : ({ display: "none" })}>
                        <div id="hide-genres" onClick={() => { setMoreGenres(false) }}><IoMdArrowDropup size="1.2em" /></div>
                        {genres && (<>
                            {genres.map((genre, idx) => (
                                <Link key={idx} className="no-decor" to={"/genre/" + genre.slug} onClick={() => { setMoreGenres(false) }}>
                                    <div className="genre shadow">{genre.genre}</div>
                                </Link>
                            ))}
                            <span id="see-all-genres">
                                <Link className="no-decor" to="/genres/" onClick={() => { setMoreGenres(false) }}>{i18n.t('buttons.seeAll')}</Link>
                            </span>
                        </>)}
                    </div>
                </div>
            </div>
        </>
    );

}
export default SearchBar;