import React, { useState } from 'react';
import "./style.css";
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

function Accordion({ total_songs, songs }) {

    const [showContent, setShowContent] = useState(false);

    return (
        <>
            <div className="accordion" onClick={() => { setShowContent(!showContent) }}>
                <div className="accordion-title">{total_songs} Músicas analisadas</div>
                <div className="see-more">
                    {showContent ? (<>Ver menos<IoMdArrowDropup size="1.2em" /></>) : (<>Ver tudo<IoMdArrowDropdown size="1.2em" /></>)}
                </div>
                <div></div>
            </div>
            <div className="panel" style={showContent ? ({ display: "flex" }) : ({ display: "none" })}>
                {songs.map((song, idx) => (<span key={idx} className="shadow" onClick={() => { window.open(song.url, "_blank") }}>{song.title}</span>))}
            </div>
        </>
    );
}

export default Accordion;