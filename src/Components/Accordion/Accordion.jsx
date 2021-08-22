import React, { useState } from 'react';
import "./style.css";
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { i18n } from '../../translate/i18n';

function Accordion({ total_songs, songs }) {

    const [showContent, setShowContent] = useState(false);

    return (
        <>
            <div className="accordion" onClick={() => { setShowContent(!showContent) }}>
                <div className="accordion-title">{total_songs} {i18n.t('words.analyzedSongs')}</div>
                <div className="see-more">
                    {showContent ? (<>{i18n.t('buttons.seeLess')}<IoMdArrowDropup size="1.2em" /></>) : (<>{i18n.t('buttons.seeAll')}<IoMdArrowDropdown size="1.2em" /></>)}
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