import React from 'react';
import './style.css';
import { AiOutlineToTop } from 'react-icons/ai';

function BackToTop() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div id="back-top">
            <div onClick={() => { scrollToTop() }}>
                <span><AiOutlineToTop id="back-top-icon" size={30} /></span>
                <span>Voltar ao topo</span>
            </div>
        </div>
    );
}

export default BackToTop;
