import React, { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
const axios = require('axios').default;

function SearchBar() {

    const [term, setTerm] = useState("");
    const [moreGenres, setMoreGenres] = useState(false);
    const [genres, setGenres] = useState(null);

    function setSearchTerm(term) {
        setTerm(term.trim());
    }

    function submitSearch() {
        document.getElementById('search-form').submit();
    }

    useEffect(() => {
        const url = 'http://localhost:8080/genres/80';
        axios.get(url).then(res => {
            setGenres(res.data);
        }).catch(e => console.log(e));
    }, []);

    return (
        <>
            <form id="search-form" action={"/search/" + term}>
                <div className="search-banner">
                    <div className="alphabet">
                        <a href="/">#</a>
                        <a href="/">A</a>
                        <a href="/">B</a>
                        <a href="/">C</a>
                        <a href="/">D</a>
                        <a href="/">E</a>
                        <a href="/">F</a>
                        <a href="/">G</a>
                        <a href="/">H</a>
                        <a href="/">I</a>
                        <a href="/">J</a>
                        <a href="/">K</a>
                        <a href="/">L</a>
                        <a href="/">M</a>
                        <a href="/">N</a>
                        <a href="/">O</a>
                        <a href="/">P</a>
                        <a href="/">Q</a>
                        <a href="/">R</a>
                        <a href="/">S</a>
                        <a href="/">T</a>
                        <a href="/">U</a>
                        <a href="/">V</a>
                        <a href="/">W</a>
                        <a href="/">X</a>
                        <a href="/">Y</a>
                        <a href="/">Z</a>
                    </div>
                    <div className="search-container">
                        <div className="input-container">
                            <input type="text" placeholder="Procure por artista ou banda"
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
                                <Link className="no-decor" to="/genres/" onClick={() => { setMoreGenres(false) }}>Ver todos</Link>
                            </span>
                        </>)}
                    </div>
                </div>
            </div>
        </>
    );

}
export default SearchBar;