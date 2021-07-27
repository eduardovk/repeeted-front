import React from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

function Tags() {
    return (
        <div className="tags-container">
            <h3>Tags: </h3>
            <span className="shadow">indie rock</span>
            <span className="shadow">pop rock</span>
            <span className="shadow">heavy metal</span>
            <div className="share-report">
                <Tippy content="Compartilhar Resultado"><div><GiShare id="share-btn" size="2em" /></div></Tippy>
                <Tippy content="Reportar Erro"><div><FiAlertTriangle id="report-btn" size="1.8em" /></div></Tippy>
            </div>
        </div>
    );
}

export default Tags;