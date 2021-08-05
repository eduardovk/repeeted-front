import React from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";

function Tags(genres) {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="tags-container">
            <h3>Tags: </h3>
            {genres.genres.length > 0 && (<>
                {genres.genres.map((genre,idx) => (
                    <Link key={idx} className="no-decor" to={"/genres/" + genre.slug} onClick={() => { scrollToTop() }}>
                        <span className="shadow">{genre.name}</span>
                    </Link>
                ))}
            </>)}
            <div className="share-report">
                <Tippy content="Compartilhar Resultado"><div><GiShare id="share-btn" size="2em" /></div></Tippy>
                <Tippy content="Reportar Erro"><div><FiAlertTriangle id="report-btn" size="1.8em" /></div></Tippy>
            </div>
        </div>
    );
}

export default Tags;