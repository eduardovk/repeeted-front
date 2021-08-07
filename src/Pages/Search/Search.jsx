import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import { useParams } from 'react-router-dom'
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { scrollToTop } from '../../Helpers';
const axios = require('axios').default;

function Search() {

    const { term } = useParams();
    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        scrollToTop();
        if (term && term.trim() !== '') {
            setLoading(true);
            axios.get('http://localhost:8080/search/' + term).then(res => {
                if (res.data && res.data.response) {
                    console.log(res.data.response)
                    setArtists(res.data.response);
                    setLoading(false);
                }
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="container">
            <h3 id="searching-for">Pesquisando por termo '{term}'...</h3>
            <ArtistCards title="Resultados da pesquisa" loading={loading} artists={artists} />
        </div>
    );
}
export default Search;