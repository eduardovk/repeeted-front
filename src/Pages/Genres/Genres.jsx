import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import PageLoading from "../../Components/PageLoading";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
const axios = require('axios').default;

function Genres() {

    const [genres, setGenres] = useState([]);
    const {apiURL} = useContext(GlobalContext);

    useEffect(() => {
        scrollToTop();
        const url = `${apiURL}/genres`;
        axios.get(url).then(res => {
            setGenres(res.data);
        }).catch(e => console.log(e));
    }, []);

    return (
        <div id="all-genres-container">
            <h2>{i18n.t('genres.allGenres')}</h2>
            <div id="all-genres-list">
                {genres.length > 0 ? (<>
                    {genres.map((genre, idx) => (
                        <Link key={idx} className="no-decor" to={"/genre/" + genre.slug}>
                            <span className="rough-shadow">{genre.genre} ({genre.count})</span>
                        </Link>
                    ))}
                </>) : (<PageLoading />)}
            </div>
        </div>
    );
}
export default Genres;