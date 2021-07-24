import React, { useState } from 'react';
import "./style.css";
import { FaSearch } from 'react-icons/fa'

function SearchBar() {

    return (
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
                <div className="db-info">
                    <table>
                        <tbody>
                            <tr>
                                <td align="left">+10.000</td>
                                <td align="right">Artistas</td>
                            </tr>
                            <tr>
                                <td align="left">+2.500.000</td>
                                <td align="right">Músicas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Procure por artista ou banda" />
                    <div className="search-icon"><FaSearch /></div>
                </div>
            </div>
        </div>
    );

}
export default SearchBar;