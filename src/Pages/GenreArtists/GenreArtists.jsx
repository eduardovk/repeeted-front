import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import "animate.css";
import { useParams } from 'react-router-dom'
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import Paginator from '../../Components/Paginator/Paginator';
import { scrollToTop } from '../../Helpers';
import { GlobalContext } from '../../Contexts/GlobalContext';

const axios = require('axios').default;

function GenreArtists() {

    var { slug, page } = useParams();
    const {apiURL} = useContext(GlobalContext);
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
            var pageNumber = (!page || page.trim() === '') ?  1 : page;
            setCurrentPage(parseInt(pageNumber));
            axios.get(`${apiURL}/search/genre/${slug}/${pageNumber}`).then(res => {
                if (res.data) {
                    setArtists(res.data.artists);
                    setGenre(res.data.genre.toUpperCase());
                    let totalPages = res.data.totalPages;
                    setTotalPages(totalPages);
                    pageNumber > 1 ? setHasPrevious(true) : setHasPrevious(false);
                    ((totalPages > 1) && (pageNumber < totalPages)) ? setHasNext(true) : setHasNext(false);
                    setLoading(false);
                }
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, [page,slug]);

    return (
        <div className="container">
            <ArtistCards title={genre} loading={loading} artists={artists} />
            <Paginator props={{ currentPage, totalPages, hasPrevious, hasNext, link: `/genre/${slug}/` }} />
        </div>
    );
}
export default GenreArtists;