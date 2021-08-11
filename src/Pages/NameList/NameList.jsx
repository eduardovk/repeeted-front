import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import PageLoading from "../../Components/PageLoading";
import Paginator from '../../Components/Paginator';
import { scrollToTop } from '../../Helpers';
const axios = require('axios').default;

function NameList() {

    var { letter, page } = useParams();

    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    useEffect(() => {
        scrollToTop();
        if (letter && letter.trim() !== '') {
            setLoading(true);
            if (!page || page.trim() === '') page = 1;
            setCurrentPage(parseInt(page));
            axios.get(`http://localhost:8080/search/letter/${letter}/${page}`).then(res => {
                if (res.data) {
                    let artists = res.data.artists;
                    if (artists && artists.length > 0) {
                        setArtists(artists);
                        let totalPages = res.data.totalPages;
                        setTotalPages(totalPages);
                        page > 1 ? setHasPrevious(true) : setHasPrevious(false);
                        ((totalPages > 1) && (page < totalPages)) ? setHasNext(true) : setHasNext(false);
                    }
                }
                setLoading(false);
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="container">
            {loading ? (<PageLoading />) : (
                <>
                    <div id="text-columns">
                        {artists.map((artist, idx) => (
                            <Link key={idx} className="no-decor" to={"/" + artist.slug}>
                                <span className="rough-shadow">{artist.name}</span>
                            </Link>
                        ))}
                    </div>
                    <Paginator props={{ currentPage, totalPages, hasPrevious, hasNext, link: `/letters/${letter}/` }} />
                </>
            )}
        </div >
    );
}
export default NameList;