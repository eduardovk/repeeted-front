import React, { useState } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

function SearchBar() {

    const [term, setTerm] = useState("");
    const [allGenres, setAllGenres] = useState(false);

    function submitSearch(){
        document.getElementById('search-form').submit();
    }

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
                                onChange={(event) => { setTerm(event.target.value); }} />
                            <span className="search-icon" onClick={()=>{submitSearch()}}>
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                </div>
            </form>
            <div className="fake-bar">
                <div className="genres-container">
                    <div className="main-genres" style={allGenres ? ({ display: "none" }) : ({ display: "flex" })}>
                        <div className="genre shadow">dance pop</div>
                        <div className="genre shadow">pop</div>
                        <div className="genre shadow">rock</div>
                        <div className="genre shadow">rap</div>
                        <div className="genre g1  shadow">hip hop</div>
                        <div className="genre g2  shadow">pop rap</div>
                        <div className="genre g3  shadow">modern rock</div>
                        <div id="show-genres" onClick={() => { setAllGenres(true) }}><IoMdArrowDropdown size="1.2em" /></div>
                    </div>
                    <div className="all-genres" style={allGenres ? ({ display: "flex" }) : ({ display: "none" })}>
                        <div id="hide-genres" onClick={() => { setAllGenres(false) }}><IoMdArrowDropup size="1.2em" /></div>
                        <div className="genre shadow">dance pop</div>
                        <div className="genre shadow">pop</div>
                        <div className="genre shadow">rock</div>
                        <div className="genre shadow">rap</div>
                        <div className="genre">hip hop</div>
                        <div className="genre">pop rap</div>
                        <div className="genre">modern rock</div>
                        <div className="genre">pop rock</div>
                        <div className="genre">indie pop</div>
                        <div className="genre">indie rock</div>
                        <div className="genre">pop dance</div>
                        <div className="genre">electropop</div>
                        <div className="genre">underground hip hop</div>
                        <div className="genre">indie folk</div>
                        <div className="genre">trap</div>
                        <div className="genre">french hip hop</div>
                        <div className="genre">soft rock</div>
                        <div className="genre">mellow gold</div>
                        <div className="genre">folk rock</div>
                        <div className="genre">alternative metal</div>
                        <div className="genre">post-teen pop</div>
                        <div className="genre">alternative rock</div>
                        <div className="genre">german hip hop</div>
                        <div className="genre">southern hip hop</div>
                        <div className="genre">latin</div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default SearchBar;