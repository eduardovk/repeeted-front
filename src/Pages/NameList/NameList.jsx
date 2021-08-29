import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import PageLoading from "../../Components/PageLoading";
import Paginator from '../../Components/Paginator';
import { scrollToTop } from '../../Helpers';
import { GlobalContext } from '../../Contexts/GlobalContext';
const axios = require('axios').default;

function NameList() {

    var { letter, page } = useParams();
    const {apiURL} = useContext(GlobalContext);

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
            var pageNumber = (!page || page.trim() === '') ?  1 : page;
            setCurrentPage(parseInt(pageNumber));
            axios.get(`${apiURL}/search/letter/${letter}/${pageNumber}`).then(res => {
                if (res.data) {
                    let artists = res.data.artists;
                    if (artists && artists.length > 0) {
                        setArtists(artists);
                        let totalPages = res.data.totalPages;
                        setTotalPages(totalPages);
                        pageNumber > 1 ? setHasPrevious(true) : setHasPrevious(false);
                        ((totalPages > 1) && (pageNumber < totalPages)) ? setHasNext(true) : setHasNext(false);
                    }
                }
                setLoading(false);
            }).catch(e => console.log(e));
        } else {
            setLoading(false);
        }
    }, [letter,page,apiURL]);

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