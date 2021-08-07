import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import PageLoading from "../../Components/PageLoading";
import { scrollToTop } from '../../Helpers';
const axios = require('axios').default;

function Genres() {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        scrollToTop();
        const url = 'http://localhost:8080/genres';
        axios.get(url).then(res => {
            setGenres(res.data);
        }).catch(e => console.log(e));
    }, []);

    return (
        <div id="all-genres-container">
            <h2>Todos os gêneros</h2>
            <div id="all-genres-list">
                {genres.length > 0 ? (<>
                    {genres.map((genre, idx) => (
                        <Link key={idx} className="no-decor" to={"/genre/" + genre.slug}>
                            <span className="rough-shadow yellow-tag">{genre.genre} ({genre.count})</span>
                        </Link>
                    ))}
                </>) : (<PageLoading />)}
            </div>
        </div>
    );
}
export default Genres;