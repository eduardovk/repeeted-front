import React from 'react';
import './style.css';
import { BsArrowUpShort } from 'react-icons/bs';
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';

function BackToTop() {
    return (
        <div id="back-top">
            <div onClick={() => { scrollToTop() }}>
                <span id="arrow-top"><BsArrowUpShort id="back-top-icon" size={25} /></span>
                <span>{i18n.t('buttons.backToTop')}</span>
            </div>
        </div>
    );
}

export default BackToTop;
