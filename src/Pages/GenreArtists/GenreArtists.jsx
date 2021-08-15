import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import { useParams } from 'react-router-dom'
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import Paginator from '../../Components/Paginator/Paginator';
import { scrollToTop } from '../../Helpers';
const axios = require('axios').default;

function GenreArtists() {

    var { slug, page } = useParams();
    const [loading, setLoading] = useState(true);
    const [genre, setGenre] = useState(null);
    const [artists, setArtists] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    useEffect(() => {
        scrollToTop();
        if (slug && slug.trim() !== '') {
            setLoading(true);
            if (!page || page.trim() === '') page = 1;
            setCurrentPage(parseInt(page));
            axios.get(`http://localhost:8080/search/genre/${slug}/${page}`).then(res => {
                if (res.data) {
                    setArtists(res.data.artists);
                    setGenre(res.data.genre.toUpperCase());
                    let totalPages = res.data.totalPages;
                    setTotalPages(totalPages);
                    page > 1 ? setHasPrevious(true) : setHasPrevious(false);
                    ((totalPages > 1) && (page < totalPages)) ? setHasNext(true) : setHasNext(false);
                    setLoading(false);
                }
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="container">
            <ArtistCards title={genre} loading={loading} artists={artists} />
            <Paginator props={{ currentPage, totalPages, hasPrevious, hasNext, link: `/genre/${slug}/` }} />
        </div>
    );
}
export default GenreArtists;