import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import "animate.css";
import { useParams } from 'react-router-dom'
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
const axios = require('axios').default;

function Search() {

    const { term } = useParams();
    const {apiURL} = useContext(GlobalContext);
    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        scrollToTop();
        if (term && term.trim() !== '') {
            setLoading(true);
            axios.get(`${apiURL}/search/` + term).then(res => {
                if (res.data && res.data.response) {
                    setArtists(res.data.response);
                    setLoading(false);
                }
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, [term]);

    return (
        <div className="container">
            <h3 id="searching-for">{i18n.t('search.searching')} '{term}'...</h3>
            <ArtistCards title={i18n.t('search.results')} loading={loading} artists={artists} />
        </div>
    );
}
export default Search;