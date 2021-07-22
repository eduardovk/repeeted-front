import React from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

function Tags() {
    return (
        <div className="tags-container">
            <h3>Tags: </h3>
            <span>indie rock</span>
            <span>pop rock</span>
            <span>heavy metal</span>
            <div className="share-report">
                <GiShare size="2em" />
                <FiAlertTriangle size="1.8em" />
            </div>
        </div>
    );
}

export default Tags;