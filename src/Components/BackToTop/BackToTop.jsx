import React from 'react';
import './style.css';
import { AiOutlineToTop } from 'react-icons/ai';
import { scrollToTop } from '../../Helpers';

function BackToTop() {
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
