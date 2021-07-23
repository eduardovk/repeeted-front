import React, { useState } from 'react';
import "./style.css";
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

function Accordion() {

    const [showContent, setShowContent] = useState(false);

    return (
        <>
            <div className="accordion" onClick={() => { setShowContent(!showContent) }}>
                <div className="accordion-title">999 Músicas analisadas</div>
                <div className="see-more">
                    {showContent ? (<>Ver menos<IoMdArrowDropup size="1.2em" /></>) : (<>Ver tudo<IoMdArrowDropdown size="1.2em" /></>)} 
                </div>
                <div></div>
            </div>
            <div className="panel" style={showContent ? ({ display: "flex" }) : ({ display: "none" })}>
                <span>A Day in the Life</span>
                <span>Because I Know You Love Me So</span>
                <span>Blackbird</span>
                <span>Come Together</span>
                <span>Day Tripper</span>
                <span>Eleanor Rigby</span>
                <span>Glass Onion</span>
                <span>Happiness is a Warm Gun</span>
                <span>Hey Jude</span>
                <span>Here Comes the Sun</span>
                <span>Helter Skelter</span>
                <span>In My Life</span>
                <span>Kansas City</span>
                <span>Ob-La-Di, Ob-La-Da</span>
            </div>
        </>
    );
}

export default Accordion;