import React from 'react';
import './style.css';
import { BsArrowUpShort } from 'react-icons/bs';
import { scrollToTop } from '../../Helpers';

function BackToTop() {
    return (
        <div id="back-top">
            <div onClick={() => { scrollToTop() }}>
                <span id="arrow-top"><BsArrowUpShort id="back-top-icon" size={25} /></span>
                <span>Voltar ao topo</span>
            </div>
        </div>
    );
}

export default BackToTop;
